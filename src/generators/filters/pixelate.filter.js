import BaseGenerator from "../../structures/BaseGenerator.js";
import { createCanvas, loadImage } from "@napi-rs/canvas";

class PixelateFilter extends BaseGenerator {
  constructor() {
    super();
    this.blockSize = 10;
  }

  setBlockSize(size) {
    this.blockSize = size || this.blockSize;
    return this;
  }

  async apply() {
    if (!this.source) throw new Error("You didn't pass the image path!");

    const image = await loadImage(this.source);
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(image, 0, 0);

    for (let y = 0; y < image.height; y += this.blockSize) {
      for (let x = 0; x < image.width; x += this.blockSize) {
        const imageData = ctx.getImageData(x, y, this.blockSize, this.blockSize);
        const data = imageData.data;

        let avgRed = 0;
        let avgGreen = 0;
        let avgBlue = 0;

        for (let i = 0; i < data.length; i += 4) {
          avgRed += data[i];
          avgGreen += data[i + 1];
          avgBlue += data[i + 2];
        }

        avgRed = Math.round(avgRed / (data.length / 4));
        avgGreen = Math.round(avgGreen / (data.length / 4));
        avgBlue = Math.round(avgBlue / (data.length / 4));

        ctx.fillStyle = `rgb(${avgRed}, ${avgGreen}, ${avgBlue})`;
        ctx.fillRect(x, y, this.blockSize, this.blockSize);
      }
    }

    return this.encode(canvas, image);
  }
}

export default PixelateFilter;
