import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';
import fsPromises from 'fs/promises';
import crypto from 'crypto';


export const getHash = async (pathArg) => {
    if (pathArg) {
        const hash = crypto.createHash('SHA256');
        const filePath = path.resolve(pathArg);
        fs.access(filePath, (err) => {
            if (err) console.error('Operation failed')
            else {
                const file = fs.createReadStream(filePath);
                hash.setEncoding('hex');
                file.on('end', () => {
                    hash.end();
                    console.log(hash.read());
                })
                file.pipe(hash)
            }
        })
    } else console.error('Operation failed')
};

// hash fs/files/fileToRead.txt