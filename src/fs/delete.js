import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

export const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filePass = path.resolve(__dirname, 'files', 'fileToRemove.txt');
    fs.stat(filePass, (err) => {
        if (err) {
            console.log('fileToRemove.txt no file');
            throw new Error('FS operation failed');
        } else {
            fs.unlink(filePass, (err) => {
                if (err) {
                    console.log(err)
                } else console.log('File remove')
            })
        };
    })
};

remove();
//node src/fs/delete.js