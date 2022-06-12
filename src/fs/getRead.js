import fs from 'fs';
import path from 'path';

export const getRead = async (filePath) => {
    if (filePath) {
        const filePass = path.resolve(filePath)
        fs.access(filePass, (err) => {
            if (err) {
                console.error('Operation failed');
            } else {
                fs.readFile(filePass, 'utf-8', (err, data) => {
                    if (err) console.error('Operation failed');
                    else console.log(data)
                })
            }
        })
    } else console.error('Operation failed');
};

// cut src/fs/files/fileToRead.txt