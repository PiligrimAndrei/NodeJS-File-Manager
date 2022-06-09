import { getFilePass } from './getFilePass.js';
import fs from 'fs';
import path from 'path';

export const create = async () => {
    const filePass = getFilePass(import.meta.url, 'fresh.txt');
    fs.access(filePass, (err) => {
        if (err) {
            const writableStream = fs.createWriteStream(filePass)
            writableStream.write('I am fresh and young');
        } else {
            throw Error;
        }
    })
}
create();