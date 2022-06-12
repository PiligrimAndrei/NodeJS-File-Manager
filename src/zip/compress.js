import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

export const getCompress = async (ArgsOne, ArgsTwo) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filePass = path.resolve(ArgsOne);
    //console.log('filePass', filePass);
    const zipPass = path.resolve(ArgsTwo);
    //console.log('zipPass', zipPass);

    fs.access(filePass, (err) => {
        if (err) console.error('Operation failed: not file')
        else {
            const input = fs.createReadStream(filePass);
            const output = fs.createWriteStream(zipPass);
            const BrotliCompress = zlib.createBrotliCompress();
            input.pipe(BrotliCompress).pipe(output);
        }
    })
};

//compress src/zip/files/fileToCompession.txt src/zip/files/archive