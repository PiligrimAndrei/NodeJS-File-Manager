import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

export const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filePass = path.resolve(__dirname, 'files', 'fileTocompress.txt');
    const zipPass = path.resolve(__dirname, 'files', 'archive.gz');

    const input = fs.createReadStream(filePass);
    const output = fs.createWriteStream(zipPass);

    const gzip = zlib.createGzip();
    input.pipe(gzip).pipe(output);
};
compress();
//node src/zip/compress.js