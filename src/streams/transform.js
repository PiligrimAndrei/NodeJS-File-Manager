import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';
import { pipeline, Transform } from 'stream';

export const transform = async () => {

    const readable = process.stdin;
    const writable = process.stdout;

    const transformStream = new Transform({
        transform(chunk, enk, cb) {
            const chunkString = chunk.toString().trim();
            const chunkReverse = chunkString.split('').reverse().join('');
            this.push(chunkReverse + '\n');

            cb()
        }
    });

    pipeline(
        readable,
        transformStream,
        writable,
        err => {
            console.log('Error:', err)
        }
    )
};

transform();
//node src/streams/transfrom.js