<div align="center">
  <img src="https://imgur.com/aolsTFs.png" height="150">
  <p>A powerful tool for creating custom images from templates, automating the graphic design process</p>
  <img alt="GitHub stars" src="https://img.shields.io/github/stars/HarukaYamamoto0/image-forge?color=informational">
  <img alt="GitHub fork" src="https://img.shields.io/github/forks/HarukaYamamoto0/image-forge?color=informational">
  <img alt="GitHub license" src="https://img.shields.io/github/license/HarukaYamamoto0/image-forge?color=informational">
</div>

## Installation
You can install it via npm or yarn:

```bash
npm install image-forge
# Or
yarn add image-forge
```

## Import
Todos os geradores de imagens estão são exportados usando um único arquivo ˋindex.js´, então apenas os importe usando desastruturação:

```javascript
import { GrayFilter } from "image-forge"
```

Sim todos os geradores são classes, veja um exemplo de como usar o ˋGrayFilterˋ:

```javascript
import { GrayFilter } from "image-forge"
import { writeFileSync } from "node:fs";

const filter = new GrayFilter(./path/to/file.png)
const imageBuffer = filter.apply()

writeFileSync('./simpleImage.png', imageBuffer);
```

### FAQ

#### Does it throw errors?

`jsonforenv` handles errors during the JSON file loading process. If errors occur when reading the file, parsing the JSON, or if the file is not found, the library will throw appropriate errors to inform the user of the problem.

Here is an example of how to catch errors when using `jsonforenv`:

```javascript
try {
  loadEnvFromFile("path/to/your/config.json");
} catch (error) {
  console.error(error.message);
  // Do something about the error if necessary
}
```

## Contributing
Contributions are welcome! Feel free to open issues and submit pull requests to improve this package.

## 📝 License

This project is under license. See the [LICENSE](./LICENSE) file for more details.
