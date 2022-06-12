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
import { getList } from './fs/getList.js';
import { getHash } from './hash/gethash.js';
import { addFile } from './fs/addFile.js';

export const getSwitchCommand = (command, commandArgsOne, commandArgsTwo, dirNow) => {
  const pathSeporator = path.sep;
  switch (command) {
    case 'up':
      process.chdir('../', (err) =>
        console.log(process.cwd()));
      break;
    case 'cd..':
      process.chdir('../', (err) =>
        console.error('Operation failed'))
      break;
    case 'ls':
      getList(dirNow);
      break;
    case 'cd':
      switch (commandArgsOne) {
        case '..':
          process.chdir('../', (err) => {
            if (err) console.error('Operation failed')
          });
          break;
        default:
          if (commandArgsOne) {
            process.chdir(path.resolve(commandArgsOne), (err) => {
              if (err) console.error('Operation failed');
            });
          } else console.error('Operation failed');
          break;
      };
      break;
    case 'add':
      addFile(commandArgsOne)
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
    case 'hash':
      getHash(commandArgsOne);
      break;
    default:
      console.error('Invalid input')
  }

};

