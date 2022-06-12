import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

export const getRead = async (filePath) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filePass = path.resolve(filePath)
    fs.access(filePass, (err) => {
        if (err) {
            console.error('Operation failed');
        } else {
            fs.readFile(filePass, 'utf-8', (err, data) => {
                if (err) console.log(err)
                else console.log(data)
            })
        }
    })
};

// cut src/fs/files/fileToRead.txt