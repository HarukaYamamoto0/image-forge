class BaseGenerator {
  constructor() {
    this.source = null;
    this.outputFormat = "png";
    this.dimensions = {
      width: 0,
      heigth: 0,
    };
    this.image = null;
    this.canvas = null;
  }

  setSource(source) {
    this.source = source || this.source;
    return this;
  }

  setOutputFormat(format) {
    this.outputFormat = format || this.outputFormat;
  }

  setDimensions({ width, heigth }) {
    this.dimension.width = width || this.dimension.width;
    this.dimension.heigth = heigth || this.dimension.heigth;
    return this;
  }

  encode(canvas, image) {
    const imageType = this.outputFormat || (image.type && image.type.split("/").pop()) || "jpeg";
    return canvas.encode(imageType);
  }
}

export default BaseGenerator;
