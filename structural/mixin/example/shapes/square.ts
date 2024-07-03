import { applyMixins } from './mixin';
import { Resizable } from './resizable';
import { Rotatable } from './rotatable';

class Square {
  draw(): void {
    console.log('Drawing Square');
  }

  rotateAdnDraw() {
    this.rotate();
    this.draw();
  }
}

interface Square extends Resizable, Rotatable {}

applyMixins(Square, [Resizable, Rotatable]);

export default Square;