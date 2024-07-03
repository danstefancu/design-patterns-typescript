import { applyMixins } from '../shapes/mixin';
import { Logger } from './logger';

class Resizable {
  resize(): void {
    this.log('resizing');
  }
}

interface Resizable extends Logger {}

applyMixins(Resizable, [Logger]);

export default Resizable;