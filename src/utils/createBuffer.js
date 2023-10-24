/**
 * Creates a buffer from a canvas.
 *
 * @param {Canvas} canvas - The Canvas object from which the buffer will be created.
 * @param {string} outputType - The type of the output image. Default is "image/png".
 * @returns {Promise<Buffer>} - A buffer containing the image generated from the canvas.
 */
export default function createBuffer(canvas, outputType = "image/png") {
  return new Promise((resolve, reject) => {
    try {
      const buffer = canvas.toBuffer(outputType);
      resolve(buffer);
    } catch (error) {
      reject(
        `Error creating buffer (try checking the image output type): ${error.stack}`,
      );
    }
  });
}
