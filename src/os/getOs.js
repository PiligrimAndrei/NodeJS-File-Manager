import os from 'os';

export const getOs = (ArgOne) => {
  switch (ArgOne) {
    case '--EOL':
      console.log('os.EOL', JSON.stringify(os.EOL));
      break;
    case '--cpus':
      console.log(os.cpus());
      break;
    case '--homedir':
      console.log(os.homedir());
      break;
    case '--username':
      console.log(os.userInfo('utf-8').username);
      break;
    case '--architecture':
      console.log(os.arch());
      break;
    default:
      console.error('Invalid input');
  }
}