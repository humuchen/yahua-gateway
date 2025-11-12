const fs = require('fs');
const path = require('path');

const imagesDir = path.resolve(__dirname, '../assets/images');
const files = fs.readdirSync(imagesDir);

let importLines = '';
const imageVars = [];

files.forEach((file, idx) => {
  // 只处理图片文件
  if (/\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(file)) {
    const varName = `img${idx + 1}`;
    importLines += `import ${varName} from '@/assets/images/${file}';\n`;
    imageVars.push(varName);
  }
});

importLines += `\nexport const images = [${imageVars.join(',')}];\n`;

fs.writeFileSync(path.resolve(__dirname, './imageImports.ts'), importLines);
