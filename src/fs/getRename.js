import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

export const getRename = async (filePath, newName) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const pathSeporator = path.sep;
    const oldPath = path.resolve(filePath);
    const newPath = oldPath.split(pathSeporator).slice(0, -1).join(pathSeporator) + pathSeporator + newName;
    console.log('newPath', newPath);

    fs.stat(oldPath, (err) => {
        if (err) {
            console.error('Operation failed: no file')
        } else {
            fs.stat(newPath, (err) => {
                if (!err) {
                    console.log('properFilename.md already exists')
                    throw new Error('FS operation failed')
                } else {
                    fs.rename(oldPath, newPath, (err) => {
                        if (err) console.log('file not found')
                        else console.log('File rename')
                    })
                }
            })
        }
    })
}
//rename src/fs/files/fresh.txt freshNew.txt