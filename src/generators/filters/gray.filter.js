import { createCanvas, loadImage } from "@napi-rs/canvas";

class GrayFilter {
  constructor(imagePath) {
    this.imagePath = imagePath;
  }

  async apply() {
    const image = await loadImage(this.imagePath);
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(image, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = avg;
      data[i + 1] = avg;
      data[i + 2] = avg;
    }

    ctx.putImageData(imageData, 0, 0);

    return canvas.encode("jpeg");
  }
}

export default GrayFilter;
