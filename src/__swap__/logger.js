export const STATE_CREATED = 'STATE_CREATED';
export const EFFECT_ADDED = 'EFFECT_ADDED';
export const EFFECT_REMOVED = 'EFFECT_REMOVED';
export const EFFECT_TEARDOWN = 'EFFECT_TEARDOWN';
export const EFFECT_STEP = 'EFFECT_STEP';
export const EFFECT_EXPORTED = 'EFFECT_EXPORTED';
export const RIEW_CREATED = 'RIEW_CREATED';

export function createLogger() {
  const api = {};

  api.log = function () {
    return 'STUBBED_LOGGER';
  };
  api.events = () => [];

  return api;
};
