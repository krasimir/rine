import { getId } from './utils';
import { EFFECT_FORK, EFFECT_EXPORTED, STATE_DESTROY } from './constants';
import { implementIterableProtocol, implementLoggableInterface } from './interfaces';

export function isEffect(effect) {
  return effect && effect.id && effect.id.split('_').shift() === 'e';
}

export default function createEffect(state, items = [], emit) {
  const effect = function (...payload) {
    return state.runQueue(effect.items, payload);
  };

  effect.id = getId('e');
  effect.state = state;
  effect.items = items;

  implementLoggableInterface(effect, state.loggable);
  implementIterableProtocol(effect);

  // queue methods
  Object.keys(state.queueAPI).forEach(m => {
    effect[m] = (...methodArgs) => emit(EFFECT_FORK, effect, { type: m, func: methodArgs });
  });

  // effect direct methods
  effect.define = (methodName, func) => {
    state.queueAPI.define(methodName, func);
    effect[methodName] = (...methodArgs) => {
      return emit(EFFECT_FORK, effect, { type: methodName, func: methodArgs });
    };
    return effect;
  };
  effect.isMutating = () => {
    return !!effect.items.find(({ type }) => type === 'mutate');
  };
  effect.subscribe = (initialCall = false) => {
    if (effect.isMutating()) {
      throw new Error('You should not subscribe a effect that mutates the state. This will lead to endless recursion.');
    }
    if (initialCall) effect();
    state.addListener(effect);
    return effect;
  };
  effect.unsubscribe = () => {
    state.removeListener(effect);
    return effect;
  };
  effect.destroy = () => {
    emit(STATE_DESTROY);
    return effect;
  };
  effect.export = name => {
    emit(EFFECT_EXPORTED, effect, name);
    return effect;
  };
  effect.test = function (callback) {
    const test = emit(EFFECT_FORK, effect);
    const tools = {
      setValue(newValue) {
        test.items = [
          { type: 'map', func: [ () => newValue ] },
          ...test.items
        ];
      },
      swap(index, funcs, type) {
        if (!Array.isArray(funcs)) funcs = [funcs];
        test.items[index].func = funcs;
        if (type) {
          test.items[index].type = type;
        }
      },
      swapFirst(funcs, type) {
        tools.swap(0, funcs, type);
      },
      swapLast(funcs, type) {
        tools.swap(test.items.length - 1, funcs, type);
      }
    };

    callback(tools);
    return test;
  };

  return effect;
};
