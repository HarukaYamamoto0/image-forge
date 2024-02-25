import { Image } from "@napi-rs/canvas";

async fun grayFilter(imagePath) {
	const image = new Image();
	await image.load(imagePath);

	const ctx = image.getContext("2d");
	const imageData = ctx.getImageData(0, 0, image.width, image.height);
	const data = imageData.data;

	for (let i = 0; i < data.length; i += 4) {
		const avg = (data[i] + data[i + 1] + data[i + 2]) / 3
		data[i] = avg;
		data[i + 1] = avg;
		data[i + 2] = avg;
	}

	ctx.putImageData(imageData, 0, 0);

	return image.toBuffer();
}

export default grayFilter;
