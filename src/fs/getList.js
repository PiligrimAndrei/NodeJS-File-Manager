import fs from 'fs';
import path from 'path';


export const getList = async (dirNow) => {
    //const dirNow = path.resolve(pathDir);
    fs.readdir(dirNow, (err, files) => {
        if (err) {
            console.error('Operation failed')
        } else {
            files.forEach(file => console.log(file))
            return dirNow;
        }
    })
};

// node src/fs/list.js