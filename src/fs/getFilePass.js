import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

export const getFilePass = (url, filename) => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, 'files', filename);
  return filePath;
}