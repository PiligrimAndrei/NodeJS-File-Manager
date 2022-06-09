import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

export const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const oldPass = path.resolve(__dirname, 'files', 'wrongFilename.txt');
    const newPass = path.resolve(__dirname, 'files', 'properFilename.md');
    fs.stat(oldPass, (err) => {
        if (err) {
            console.log('wrongFilename.txt no file')
            throw new Error('FS operation failed')
        } else {
            fs.stat(newPass, (err) => {
                if (!err) {
                    console.log('properFilename.md already exists')
                    throw new Error('FS operation failed')
                } else {
                    fs.rename(oldPass, newPass, (err) => {
                        if (err) console.log('file not found')
                        else console.log('File rename')
                    })
                }
            })
        }
    })
}
rename();