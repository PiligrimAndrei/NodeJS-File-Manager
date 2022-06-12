export const parseArgs = () => {
    const myArgs = process.argv;

    for (let i = 0; i < myArgs.length - 1; i++) {
        if (myArgs[i].includes('--')) {
            console.log(myArgs[i].slice(2), ' is ', myArgs[i + 1])
        }
    }
    ;
}
parseArgs();

//node src/cli/args.js --propName value --prop2Name value2 --prop3Name value3 --test 55555