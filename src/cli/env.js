export const parseEnv = () => {
    const arr = process.env;
    const keys = Object.keys(arr);
    //console.log(keys);
    for (const key of keys) {
        if (key.includes('RSS_')) {
            console.log(key, '=', arr[key])
        }
    }
};
parseEnv()