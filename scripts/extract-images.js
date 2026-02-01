// scripts/extract-images.js
const fs = require('fs');
const path = require('path');

const mdContent = fs.readFileSync('pdf.md', 'utf-8');
const imageRegex = /!\[([^\]]*)\]\((data:image\/([^;]+);base64,([^)]+))\)/g;

const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

let match;
let index = 0;
const imageMap = {};

while ((match = imageRegex.exec(mdContent)) !== null) {
  const [, altText, , format, base64Data] = match;
  const fileName = `image-${String(index).padStart(2, '0')}.${format === 'png' ? 'png' : 'jpg'}`;
  const filePath = path.join(imagesDir, fileName);

  const buffer = Buffer.from(base64Data, 'base64');
  fs.writeFileSync(filePath, buffer);

  imageMap[index] = { fileName, altText };
  console.log(`Extracted: ${fileName}`);
  index++;
}

fs.writeFileSync(
  path.join(imagesDir, 'image-map.json'),
  JSON.stringify(imageMap, null, 2)
);

console.log(`\nTotal images extracted: ${index}`);
