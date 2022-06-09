import fs from 'fs';
import path from 'path';
import fsPromises from 'fs/promises';
import { getFilePass } from './fs/getFilePass.js';



const startArgs = process.argv.slice(2);
const userName = startArgs[0].split('=')[1];
console.log('Welcome to the File Manager, ', userName);

process.stdin.on('data', (data) => {
  const command = data.toString();

  if (command.startsWith('exit')) {
    process.stdin.end(() => console.log('Thank you for using File Manager, ', userName));
  } else console.log('command=', command);

});

process.on('SIGINT', () => {
  console.log('Thank you for using File Manager, ', userName);
  process.exit();
})
