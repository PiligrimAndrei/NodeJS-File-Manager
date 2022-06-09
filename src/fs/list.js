import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';
import fsPromises from 'fs/promises';

export const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const passDir = path.resolve(__dirname, 'files')
    /*const files = await fsPromises.readdir(passDir, { withFileTypes: true });
    for (const file of files) {
        if (file.isFile()) {
            const list = path.resolve(__dirname, 'files', file.name);
            console.log(list);
        }
    }*/
    fs.readdir(passDir, (err, files) => {
        if (err) {
            throw Error('FS operation failed')
        } else {
            files.forEach(file => console.log(file))
        }
    })
};
list();
// node src/fs/list.js