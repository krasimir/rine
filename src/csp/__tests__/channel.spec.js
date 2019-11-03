import { chan, buffer } from '../channel';
import { delay } from '../../__helpers__';

describe('Given a CSP channel', () => {
  describe('when we create a channel with the default buffer (fixed buffer with size 0)', () => {
    it('allow writing and reading', async () => {
      const ch = chan();

      ch.put('foo');
      expect(await ch.take()).toEqual('foo');
    });
    it('should block the channel if there is no puts but we want to take', async () => {
      const ch = chan();
      const happening = [];

      ch.take().then(() => happening.push('a'));
      ch.take().then(() => happening.push('b'));
      ch.put('foo').then(() => happening.push('c'));
      ch.put('bar').then(() => happening.push('d'));

      await delay(5);
      expect(happening).toStrictEqual(['a', 'c', 'b', 'd']);
    });
    it('should block the channel if there is no takers but we want to put', async () => {
      const ch = chan();
      const happening = [];

      ch.put('foo').then(() => happening.push('a'));
      ch.put('bar').then(() => happening.push('b'));
      ch.take().then(() => happening.push('c'));
      ch.take().then(() => happening.push('d'));

      await delay(5);
      expect(happening).toStrictEqual(['a', 'c', 'b', 'd']);
    });
  });
  describe('when we create a channel with a fixed buffer with size > 0', () => {
    it('should allow as many puts as we have space', async () => {
      const ch = chan(buffer.fixed(2));
      const happening = [];
      const spy = jest.spyOn(console, 'warn').mockImplementation(() => {});

      ch.put('foo').then(() => happening.push('a'));
      ch.put('bar').then(() => happening.push('b'));
      ch.put('zar').then(() => happening.push('c'));
      ch.put('mar').then(() => happening.push('d'));
      expect(ch.__value()).toStrictEqual(['foo', 'bar']);
      ch.take().then(() => happening.push('e'));
      expect(ch.__value()).toStrictEqual(['bar', 'zar']);
      ch.take().then(() => happening.push('f'));
      expect(ch.__value()).toStrictEqual(['zar', 'mar']);
      ch.take().then(() => happening.push('g'));
      expect(ch.__value()).toStrictEqual(['mar']);
      ch.take().then(() => happening.push('h'));
      expect(ch.__value()).toStrictEqual([]);

      await delay(5);
      expect(happening).toStrictEqual(['a', 'b', 'c', 'e', 'd', 'f', 'g', 'h']);
      spy.mockRestore();
    });
  });
  describe('when we create a channel with a dropping buffer', () => {
    it('shouldn\'t block', async () => {
      const ch = chan(buffer.fixed(2));
      const happening = [];
      const spy = jest.spyOn(console, 'warn').mockImplementation(() => {});

      ch.put('foo').then(() => happening.push('a'));
      ch.put('bar').then(() => happening.push('b'));
      ch.put('zar').then(() => happening.push('c'));
      ch.put('mar').then(() => happening.push('d'));
      expect(ch.__value()).toStrictEqual(['foo', 'bar']);
      ch.take().then(() => happening.push('e'));
      expect(ch.__value()).toStrictEqual(['bar', 'zar']);
      ch.take().then(() => happening.push('f'));
      expect(ch.__value()).toStrictEqual(['zar', 'mar']);
      ch.take().then(() => happening.push('g'));
      expect(ch.__value()).toStrictEqual(['mar']);
      ch.take().then(() => happening.push('h'));
      expect(ch.__value()).toStrictEqual([]);

      await delay(5);
      expect(happening).toStrictEqual(['a', 'b', 'c', 'e', 'd', 'f', 'g', 'h']);
      spy.mockRestore();
    });
  });
});
