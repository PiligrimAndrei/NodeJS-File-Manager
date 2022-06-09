import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

export const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filePass = path.resolve(__dirname, 'files', 'fileTocompress.txt');
    const zipPass = path.resolve(__dirname, 'files', 'archive.gz');

    const input = fs.createReadStream(zipPass);
    const output = fs.createWriteStream(filePass);

    const unzip = zlib.createUnzip();
    input.pipe(unzip).pipe(output);
};
decompress();
//node src/zip/decompress.js