import { CLOSED, ENDED, OPEN } from '../buffers/states';
import { chan } from '../channel';

export default function filter(ch) {
  ch.filter = func => {
    const newChan = chan();
    (async function listen() {
      let v;
      while (v !== CLOSED && v !== ENDED && newChan.state() === OPEN) {
        v = await ch.take();
        if (func(v)) {
          newChan.put(v);
        }
      }
    })();
    return newChan;
  };
}
