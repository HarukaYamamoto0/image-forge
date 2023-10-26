import { createCanvas, loadImage } from "canvas";
import createBuffer from "../utils/createBuffer.js";

/**
 * Applies a grayscale filter to an image and returns the grayscale image buffer.
 *
 * @param {string} imageURL - The URL or local path of the image to be transformed into grayscale.
 * @param {string} outputType - The type of the output image. Default is "image/png"
 * @returns {Promise<Buffer>} - A buffer containing the grayscale image.
 */
async function grayFilter(imageURL, outputType = "image/png") {
  const image = await loadImage(imageURL);

  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext("2d");

  ctx.drawImage(image, 0, 0);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const gray = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = gray;
    data[i + 1] = gray;
    data[i + 2] = gray;
  }

  ctx.putImageData(imageData, 0, 0);
  const buffer = await createBuffer(canvas, outputType);
  return buffer;
}

export default grayFilter;
