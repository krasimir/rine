/* eslint-disable no-param-reassign, no-multi-assign */
import { chan, isChannel, go, buffer, isState } from '../../index';
import { READ } from '../constants';
import { sput } from '../ops';
import { isGeneratorFunction } from '../../utils';

function defaultTransform(...args) {
  if (args.length === 1) return args[0];
  return args;
}

const NOTHING = Symbol('NOTHING');
export const ALL_REQUIRED = Symbol('ALL_REQUIRED');
export const ONE_OF = Symbol('ONE_OF');
const DEFAULT_OPTIONS = {
  transform: defaultTransform,
  onError: null,
  initialCall: true,
};

function normalizeChannels(channels) {
  if (!Array.isArray(channels)) channels = [channels];
  return channels.map(ch => {
    if (isState(ch)) ch = ch.READ;
    return isChannel(ch) ? ch : chan(ch);
  });
}
function normalizeTo(to) {
  if (typeof to === 'function') {
    return to;
  }
  if (isChannel(to)) {
    return to.__subFunc || (to.__subFunc = v => sput(to, v));
  }
  if (typeof to === 'string') {
    const ch = chan(to, buffer.divorced());
    return (ch.__subFunc = v => sput(to, v));
  }
  throw new Error(
    `'read' accepts string, channel or a function as a second argument. ${to} given.`
  );
}
function normalizeOptions(options) {
  options = options || DEFAULT_OPTIONS;
  const transform = options.transform || DEFAULT_OPTIONS.transform;
  const onError = options.onError || DEFAULT_OPTIONS.onError;
  const strategy = options.strategy || ALL_REQUIRED;
  const once = 'once' in options ? options.once : false;
  const initialCall =
    'initialCall' in options
      ? options.initialCall
      : DEFAULT_OPTIONS.initialCall;

  return { transform, onError, strategy, initialCall, once };
}

function waitAllStrategy(channels, to, options) {
  const { transform, onError, initialCall, once } = options;
  const data = channels.map(() => NOTHING);
  let composedAtLeastOnce = false;
  channels.forEach((ch, idx) => {
    const notify = (value, done = () => {}) => {
      data[idx] = value;
      // Notify the subscriber only if all the sources are fulfilled.
      // In case of one source we don't have to wait.
      if (composedAtLeastOnce || data.length === 1 || !data.includes(NOTHING)) {
        composedAtLeastOnce = true;
        try {
          if (isGeneratorFunction(transform)) {
            go(
              transform,
              v => {
                to(v);
                done();
              },
              value
            );
          } else {
            to(transform(...data));
            done();
          }
        } catch (e) {
          if (onError === null) {
            throw e;
          }
          onError(e);
        }
      }
    };
    if (!ch.subscribers.find(({ to: t }) => t === to)) {
      ch.subscribers.push({ to, notify, once });
    }
    // If there is already a value in the channel
    // notify the subscribers.
    const currentChannelBufValue = ch.value();
    if (initialCall && currentChannelBufValue.length > 0) {
      notify(currentChannelBufValue[0]);
    }
  });
}
function waitOneStrategy(channels, to, options) {
  const { transform, onError, initialCall, once } = options;
  channels.forEach(ch => {
    const notify = (value, done = () => {}) => {
      try {
        if (isGeneratorFunction(transform)) {
          go(
            transform,
            v => {
              to(v);
              done();
            },
            value
          );
        } else {
          to(transform(value));
          done();
        }
      } catch (e) {
        if (onError === null) {
          throw e;
        }
        onError(e);
      }
    };
    if (!ch.subscribers.find(({ to: t }) => t === to)) {
      ch.subscribers.push({ to, notify, once });
    }
    // If there is already a value in the channel
    // notify the subscribers.
    const currentChannelBufValue = ch.value();
    if (initialCall && currentChannelBufValue.length > 0) {
      notify(currentChannelBufValue[0]);
    }
  });
}

export function read(...args) {
  if (args.length === 1) {
    return {
      ch: normalizeChannels(args[0]),
      op: READ,
      options: DEFAULT_OPTIONS,
    };
  }
  if (args.length <= 2 && typeof args[1] === 'object' && !isChannel(args[1])) {
    return {
      ch: normalizeChannels(args[0]),
      op: READ,
      options: normalizeOptions(args[1]),
    };
  }
  const options = normalizeOptions(args[2]);

  let f;
  switch (options.strategy) {
    case ALL_REQUIRED:
      f = waitAllStrategy;
      break;
    case ONE_OF:
      f = waitOneStrategy;
      break;
    default:
      throw new Error('Subscription strategy not recognized.');
  }
  f(normalizeChannels(args[0]), normalizeTo(args[1]), options);
}
export function unread(channels, callback) {
  channels = normalizeChannels(channels);
  channels.forEach(ch => {
    if (isChannel(callback)) {
      callback = callback.__subFunc;
    }
    ch.subscribers = ch.subscribers.filter(({ to }) => {
      if (to !== callback) {
        return true;
      }
      return false;
    });
  });
}
export function unreadAll(channels) {
  normalizeChannels(channels).forEach(ch => {
    ch.subscribers = [];
  });
}

read.ALL_REQUIRED = ALL_REQUIRED;
read.ONE_OF = ONE_OF;
