import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

export const getRename = async (filePath, newName) => {
    if (filePath&&newName){
        const pathSeporator = path.sep;
        const oldPath = path.resolve(filePath);
        const newPath = oldPath.split(pathSeporator).slice(0, -1).join(pathSeporator) + pathSeporator + newName;
    
        fs.stat(oldPath, (err) => {
            if (err) {
                console.error('Operation failed')
            } else {
                fs.stat(newPath, (err) => {
                    if (!err) {
                        console.error('Operation failed')
                    } else {
                        fs.rename(oldPath, newPath, (err) => {
                            if (err) console.error('Operation failed')
                        })
                    }
                })
            }
        }) 
    } else console.error('Operation failed');
}
//rename src/fs/files/fresh.txt freshNew.txt