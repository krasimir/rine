/* eslint-disable no-param-reassign */
import { normalizeOptions } from './utils';
import { logger } from '../index';

const DEFAULT_OPTIONS = { dropping: false, sliding: false };
const NOOP = (v, cb) => cb(v);

function CSPBuffer(size = 0, { dropping, sliding } = DEFAULT_OPTIONS) {
  const api = {
    value: [],
    puts: [],
    takes: [],
    hooks: {
      beforePut: NOOP,
      afterPut: NOOP,
      beforeTake: NOOP,
      afterTake: NOOP,
    },
    parent: null,
    dropping,
    sliding,
  };

  api.beforePut = hook => (api.hooks.beforePut = hook);
  api.afterPut = hook => (api.hooks.afterPut = hook);
  api.beforeTake = hook => (api.hooks.beforeTake = hook);
  api.afterTake = hook => (api.hooks.afterTake = hook);
  api.isEmpty = () => api.value.length === 0;
  api.reset = () => {
    api.value = [];
    api.puts = [];
    api.takes = [];
    api.hooks = {
      beforePut: NOOP,
      afterPut: NOOP,
      beforeTake: NOOP,
      afterTake: NOOP,
    };
  };
  api.setValue = v => {
    api.value = v;
  };
  api.getValue = () => api.value;
  api.decomposeTakers = () =>
    api.takes.reduce(
      (res, takeObj) => {
        res[takeObj.options.read ? 'readers' : 'takers'].push(takeObj);
        return res;
      },
      {
        readers: [],
        takers: [],
      }
    );
  api.consumeTake = (takeObj, value) => {
    if (!takeObj.options.listen) {
      const idx = api.takes.findIndex(t => t === takeObj);
      if (idx >= 0) api.takes.splice(idx, 1);
    }
    takeObj.callback(value);
  };
  api.deleteTaker = cb => {
    const idx = api.takes.findIndex(({ callback }) => callback === cb);
    if (idx >= 0) {
      api.takes.splice(idx, 1);
    }
  };
  api.deleteListeners = () => {
    api.takes = api.takes.filter(({ options }) => !options.listen);
  };

  api.setValue = v => (api.value = v);

  const put = (item, callback) => {
    const { readers, takers } = api.decomposeTakers();
    // console.log(
    //   `put=${item}`,
    //   `readers=${readers.length}`,
    //   `takers=${takers.length}`,
    //   `value=${api.value.length} size=${size}`
    // );

    // resolving readers
    readers.forEach(reader => api.consumeTake(reader, item));

    // resolving takers
    if (takers.length > 0) {
      api.consumeTake(takers[0], item);
      callback(true);
    } else {
      if (api.value.length < size) {
        api.value.push(item);
        callback(true);
        return;
      }
      if (dropping) {
        callback(false);
        return;
      }
      if (sliding) {
        api.value.shift();
        api.value.push(item);
        callback(true);
        return;
      }
      api.puts.push({
        callback: v => {
          api.value.push(item);
          callback(v || true);
        },
        item,
      });
    }
  };

  const take = (callback, options) => {
    // console.log('take', `puts=${api.puts.length}`, `value=${api.value.length}`);
    const subscribe = () => {
      api.takes.push({ callback, options });
      return () => api.deleteTaker(callback);
    };
    options = normalizeOptions(options);
    if (options.listen) {
      options.read = true;
      if (options.initialCall) {
        callback(api.value[0]);
      }
      return subscribe();
    }
    if (options.read) {
      callback(api.value[0]);
      return;
    }
    if (api.value.length === 0) {
      if (api.puts.length > 0) {
        api.puts.shift().callback();
        callback(api.value.shift());
      } else {
        return subscribe();
      }
    } else {
      const v = api.value.shift();
      callback(v);
      if (api.value.length < size && api.puts.length > 0) {
        api.puts.shift().callback();
      }
    }
    return () => {};
  };

  api.put = (item, callback) => {
    logger.log(api.parent, 'CHANNEL_PUT_INITIATED', item);
    api.hooks.beforePut(item, beforePutItem => {
      put(beforePutItem, putOpRes =>
        api.hooks.afterPut(putOpRes, afterPutItem => {
          logger.log(api.parent, 'CHANNEL_PUT_RESOLVED', afterPutItem);
          callback(afterPutItem);
        })
      );
    });
  };
  api.take = (callback, options) => {
    let unsubscribe = () => {};
    logger.log(
      api.parent,
      options && options.listen ? 'CHANNEL_LISTEN' : 'CHANNEL_TAKE_INITIATED'
    );
    api.hooks.beforeTake(
      undefined,
      () =>
        (unsubscribe = take(
          takeOpRes =>
            api.hooks.afterTake(takeOpRes, afterTakeItem => {
              logger.log(api.parent, 'CHANNEL_TAKE_RESOLVED', afterTakeItem);
              callback(afterTakeItem);
            }),
          options
        ))
    );
    return () => unsubscribe();
  };

  return api;
}

const buffer = {
  fixed: (size = 0) => CSPBuffer(size, { dropping: false, sliding: false }),
  dropping: (size = 1) => {
    if (size < 1) {
      throw new Error('The dropping buffer should have at least size of one.');
    }
    return CSPBuffer(size, { dropping: true, sliding: false });
  },
  sliding: (size = 1) => {
    if (size < 1) {
      throw new Error('The sliding buffer should have at least size of one.');
    }
    return CSPBuffer(size, { dropping: false, sliding: true });
  },
};

export default buffer;
