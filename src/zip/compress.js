import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

export const getCompress = async (ArgsOne, ArgsTwo) => {
    const filePass = path.resolve(ArgsOne);
    const zipPass = path.resolve(ArgsTwo);

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