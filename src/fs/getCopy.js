import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';
import fsPromises from 'fs/promises';

export const getCopy = async (argOne, argTwo) => {
    const pathSeporator = path.sep;
    const filePath = path.resolve(argOne);
    const fileName = filePath.split(pathSeporator).slice(-1);
    const newFilePath = path.resolve(argTwo) + pathSeporator + fileName;
    fs.copyFile(filePath, newFilePath, (err) => {
        if (err) console.error('Operation failed: not file')
    })
};
//copy fs/files/fresh.txt zip/files/