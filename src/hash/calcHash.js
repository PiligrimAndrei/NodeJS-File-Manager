import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';
import fsPromises from 'fs/promises';
import crypto from 'crypto';


export const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const hash = crypto.createHash('SHA256');
    const filePass = path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const file = fs.createReadStream(filePass);
    hash.setEncoding('hex');

    file.on('end', () => {
        hash.end();
        console.log(hash.read());
    })
    file.pipe(hash)
};
calculateHash()
// node src/hash/calcHash.js