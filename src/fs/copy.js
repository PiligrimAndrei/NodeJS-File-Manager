import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';
import fsPromises from 'fs/promises';

export const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const files = await fsPromises.readdir(path.resolve(__dirname, 'files'), { withFileTypes: true });
    //const rmdir = await fsPromises.rm(path.resolve(__dirname, 'files-copy'), { recursive: true, force: true });
    const mkdir = await fsPromises.mkdir(path.resolve(__dirname, 'files-copy'), { recursive: true });
    for (const file of files) {
        if (file.isFile()) {
            const copy = await fsPromises.copyFile(path.resolve(__dirname, 'files', file.name), path.resolve(__dirname, 'files-copy', file.name));
        }
    }
};
copy();