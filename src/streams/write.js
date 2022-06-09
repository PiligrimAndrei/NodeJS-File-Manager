import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

export const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filePass = path.resolve(__dirname, 'files', 'fileToWrite.txt')
    const writableStream = fs.createWriteStream(filePass);

    console.log('Input your text or Ctrl+c for exit')
    process.stdin.on('readable', () => {
        let data;
        while ((data = process.stdin.read()) !== null) {
            writableStream.write(data);
        }
    });
};
write();
// node src/streams/write.js