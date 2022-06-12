import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import path from 'path';

export const getFilePass = (url, filename) => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  const filePath = path.resolve(__dirname, filename);
  //console.log(filePath)
  return filePath;
}