import path from 'path';
import fs from 'fs';

export const addFile = async (commandArgsOne) => {
  if (commandArgsOne) {
    const fileAddPass = path.resolve(commandArgsOne);
    fs.open(fileAddPass, 'w+', (err) => {
      if (err) console.error('Operation failed')
    });
  } else console.error('Operation failed');
}
