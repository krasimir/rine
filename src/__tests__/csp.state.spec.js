import { state, pub, sub, reset, topics } from '../index';

describe('Given a CSP state extension', () => {
  beforeEach(() => {
    reset();
  });
  describe('when we use the built-in get and set', () => {
    it('should retrieve and change the state value', () => {
      const s = state(10);
      const spy1 = jest.fn();
      const spy2 = jest.fn();

      s.read('R', value => `value is ${value}`);
      s.write('W1', (current, newValue) => current + newValue);
      s.write('W2', (current, newValue) => current * newValue);

      sub('R', spy1);
      sub('R', spy2);
      pub('W1', 4);
      pub('W1', 12);
      pub('W2', 3);

      expect(spy1).toBeCalledWithArgs([ 'value is 10' ], [ 'value is 14' ], [ 'value is 26' ], [ 'value is 78' ]);
      expect(spy2).toBeCalledWithArgs([ 'value is 10' ], [ 'value is 14' ], [ 'value is 26' ], [ 'value is 78' ]);
    });
  });
  describe('when we try creating a topic with the same name', () => {
    it('should warn us', () => {
      const spy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      const s = state(10);

      s.read('R');
      s.read('R');
      s.write('W');
      s.write('W');

      expect(spy).toBeCalledWithArgs([ 'Topic with name R already exists.' ], [ 'Topic with name W already exists.' ]);

      spy.mockRestore();
    });
  });
  describe('when we destroy the state', () => {
    it('should halt the created topics', () => {
      const s = state('foo');

      s.read('R');
      s.read('W');

      expect(Object.keys(topics())).toHaveLength(4);
      s.destroy();
      expect(Object.keys(topics())).toHaveLength(0);
    });
  });
  describe('when we use the built-in read and write channels', () => {
    it('should get and set the state value', () => {
      const s = state('foo');
      const s2 = state('a');
      const spy = jest.fn();
      const spy2 = jest.fn();

      sub(s.READ, spy);
      sub(s2.READ, spy2);

      pub(s.WRITE, 'bar');
      pub(s2.WRITE, 'b');

      expect(spy).toBeCalledWithArgs([ 'foo' ], [ 'bar' ]);
      expect(spy2).toBeCalledWithArgs([ 'a' ], [ 'b' ]);
    });
  });
  describe('when we want to get the value by using the `getValue` method', () => {
    it('should return the current state value', () => {
      const s = state('foo');

      expect(s.getValue()).toBe('foo');
      pub(s.WRITE, 'bar');
      expect(s.getValue()).toBe('bar');
    });
  });
});
