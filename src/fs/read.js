import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

export const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filePass = path.resolve(__dirname, 'files', 'fileToRead.txt')
    fs.access(filePass, (err) => {
        if (err) {
            throw Error('FS operation failed');
        } else {
            fs.readFile(filePass, 'utf-8', (err, data) => {
                if (err) console.log(err)
                else console.log(data)
            })
        }
    })
};
read();
// node src/fs/read.js