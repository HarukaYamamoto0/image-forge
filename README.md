<a name="readme-top"></a>

<div align="center">
  <img src="https://imgur.com/aolsTFs.png" height="150">
  <p>A powerful tool for creating custom images from templates</p>
  <img alt="Npm Downloads" src="https://img.shields.io/npm/dy/image-forge?style=flat&color=blue">
  <img alt="GitHub watchers" src="https://img.shields.io/github/watchers/HarukaYamamoto0/image-forge?style=flat">
  <img alt="GitHub stars" src="https://img.shields.io/github/stars/HarukaYamamoto0/image-forge?style=flat">
  <img alt="GitHub fork" src="https://img.shields.io/github/forks/HarukaYamamoto0/image-forge?style=flat">
  <img alt="GitHub license" src="https://img.shields.io/github/license/HarukaYamamoto0/image-forge?style=flat&color=red">
</div>

### Summary
- [📜 About the package](#about-the-package)
- [📥 Installation](#installation)
- [🛠️ Usage](#use)
- [🧐 Examples](#examples)
- [❓ FAQ](#fag)
- [🫶 Contributing](#contributing)
- [👀 License](#license)

<a name="about-the-project"></a>
### 📜 About the package
Image Forge is a package that simplifies creating images from templates. Used in the Discord bot developer community and meme creation, Image Forge offers an effective and intuitive way to generate filters and memes. With a comprehensive range of features, users can easily customize templates.

<a name="installation"></a>
### 📥 Installation
Install using your favorite package manager:

```sh
# npm
npm install image-forge

# yarn
yarn add image-forge

# pnpm
pnpm add image-forge
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="usage"></a>
### 🧐 Usage
All generators are exported using a single `index.js` file, so you can simply destructure just the generator you want using destructuring, without having to import every generator:

```js
import { GrayFilter } from "image-forge";
```

In the example below we import the `GrayFilter` generator and create the filter passing the path of the image to be processed, and finally we use the `apply` method to generate a `Buffer` of the image with the applied filter, and write it to the file `imageOutput.png`:

```js
import { GrayFilter } from "image-forge";
import { writeFileSync } from "node:fs";

const filter = new GrayFilter("./imageInput.png");
const imageBuffer = await filter.apply();

await writeFileSync("./imageOutput.png", imageBuffer);
console.log("Processing completed 🎉");
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="faq"></a>
### ❓ FAQ

#### Can it read an image from a url?
Yes, because it uses the `@napi-rs/canvas` package to manipulate images

```js
const filter = new GrayFilter("https://imgur.com/eBIlPPn.png")
```

#### How do I export the image to another format?
This is very simple, just pass the format to be exported to the `apply` method:

```js
filter.apply({ format: "png" })
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="contributing"></a>
### 🫶 Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project (`gh repo clone HarukaYamamoto0/image-forge`)
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="license"></a>
### 👀 License

This project is licensed under the terms of the MIT license. See the [LICENSE](./LICENSE) file for more details.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[object-destructuring]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring
