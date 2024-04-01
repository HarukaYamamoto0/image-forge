import BaseGenerator from "../../structures/BaseGenerator.js";
import { createCanvas, loadImage } from "@napi-rs/canvas";

class InfraredFilter extends BaseGenerator {
  constructor() {
    super();
  }

  async apply() {
    const image = await loadImage(this.source);
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(image, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const red = data[i];
      const green = data[i + 1];
      const blue = data[i + 2];

      data[i] = green;
      data[i + 1] = red;
      data[i + 2] = blue * 1.5;

      data[i] *= 1.2;
      data[i + 1] *= 1.1;
      data[i + 2] *= 1.3;
    }

    ctx.putImageData(imageData, 0, 0);

    return this.encode(canvas, image);
  }
}

export default InfraredFilter;
