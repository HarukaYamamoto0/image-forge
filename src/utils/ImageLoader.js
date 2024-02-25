import { existsSync } from "node:fs";
import { loadImage } from "@napi-rs/canvas";
import errorMessages from "./errorMessages.js";

class ImageLoader {
    constructor(imagePath) {
        this.imagePath = imagePath;
        this.image = new Image();
    }

    async loadImage() {
    	if (!existsSync(this.imagePath))
    		new Error(errorMessages.FILE_NOT_FOUND)

    	try {
				this.load
    	}

    	this.image.onload = () => resolve(this.img);
      this.image.onerror = (error) => reject(error);
      this.image.load(this.imagePath);
        });
    }

    getImage() {
        return this.img;
    }
}

module.exports = ImageLoader;
