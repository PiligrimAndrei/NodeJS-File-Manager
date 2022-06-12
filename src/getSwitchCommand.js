import fs from 'fs';
import path, { dirname } from 'path';
import { getFilePass } from './fs/getFilePass.js';
import { getOs } from './os/getOs.js';
import { getCompress } from './zip/compress.js';
import { getDecompress } from './zip/decompress.js'
import { getRead } from './fs/getRead.js';
import { getRename } from './fs/getRename.js';
import { getCopy } from './fs/getCopy.js';
import { getRemove } from './fs/getRemove.js';

export const getSwitchCommand = async (command, commandArgsOne, commandArgsTwo, dirNow) => {
  const pathSeporator = path.sep;
  switch (command) {
    case 'up':
      process.chdir('../', (err) =>
        console.error('Operation failed'));
      console.log(process.cwd())
      break;
    case 'cd..':
      process.chdir('../', (err) =>
        console.error('Operation failed'))
      break;
    case 'ls':
      fs.readdir(dirNow, (err, files) => {
        if (err) {
          throw Error('FS operation failed')
        } else {
          files.forEach(file => console.log(file))
          console.log('dirNow', dirNow)
          return dirNow;
        }
      });
      break;
    case 'cd':
      switch (commandArgsOne) {
        case '..':
          process.chdir('../', (err) =>
            console.error('Operation failed'))
          break;
        default:
          process.chdir(commandArgsOne, (err) =>
            console.error('Operation failed'));
          break;
      };
      break;
    case 'add':
      const fileAddPass = path.resolve(commandArgsOne);
      fs.open(fileAddPass, 'w+', (err) => {
        if (err) console.error('Operation failed')
      });
      break;
    case 'cat':
      getRead(commandArgsOne);
      break;
    case 'rename':
      getRename(commandArgsOne, commandArgsTwo);
      break;
    case 'copy':
      getCopy(commandArgsOne, commandArgsTwo);
      break;
    case 'remove':
      getRemove(commandArgsOne);
      break;
    case 'mv':
      getCopy(commandArgsOne, commandArgsTwo);
      getRemove(commandArgsOne);
      break;
    case 'os':
      getOs(commandArgsOne);
      break;
    case 'compress':
      getCompress(commandArgsOne, commandArgsTwo);
      break;
    case 'decompress':
      getDecompress(commandArgsOne, commandArgsTwo);
      break;

    default:
      console.error('Invalid input')
  }
};

