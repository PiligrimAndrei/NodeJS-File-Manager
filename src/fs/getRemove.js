import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

export const getRemove = async (pathArg) => {
    if (pathArg) {
        const filePath = path.resolve(pathArg);
        fs.stat(filePath, (err) => {
            if (err) {
                console.error('Operation failed');
            } else {
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.error('Operation failed');
                    }
                })
            }
        })
    } else console.error('Operation failed');

};

//remove zip/files/fresh.txt