import fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import path from 'path'
import fsPromises from 'fs/promises';
import { getFilePass } from './fs/getFilePass.js';
import { getSwitchCommand } from './getSwitchCommand.js'


let currentDir = dirname(fileURLToPath(import.meta.url));
const pathSeporator = path.sep;
console.log('pathSeporator', pathSeporator);
const startArgs = process.argv.slice(2);
const userName = startArgs[0].split('=')[1];
console.log('Welcome to the File Manager, ', userName);
process.chdir(currentDir, (err) => console.log(err))
console.log('You are currently in ', process.cwd());

process.stdin.on('data', (data) => {
  const cliArgs = data.toString().slice(0, -2).split(' ')
  const command = cliArgs[0];
  const commandArgsOne = cliArgs[1];
  const commandArgsTwo = cliArgs[2];

  if (command.startsWith('exit')) {
    console.log('Thank you for using File Manager, ', userName);
    process.exit();
  } else {
    getSwitchCommand(command, commandArgsOne, commandArgsTwo, currentDir);
    currentDir = process.cwd();
    console.log('You are currently in ', currentDir);
  }
});

process.on('SIGINT', () => {
  console.log('Thank you for using File Manager, ', userName);
  process.exit();
})

// npm run start -- --userName=Andrei