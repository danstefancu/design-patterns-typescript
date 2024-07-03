import { Logger } from './logger';
import { applyMixins } from '../shapes/mixin';

class Rotatable {
  rotate(): void {
    this.log('rotating');
  }
}

interface Rotatable extends Logger {}

applyMixins(Rotatable, [Logger]);

export default Rotatable;