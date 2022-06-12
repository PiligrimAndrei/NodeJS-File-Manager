import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

export const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filePass = path.resolve(__dirname, 'files', 'fileToRead.txt')
    const stream = fs.createReadStream(filePass, 'utf-8');

    stream.on('data', (chunk) => {
        process.stdout.write(chunk)
    })
    stream.on('error', (err) => console.log(err))

};
read();
// node src/streams/read.js