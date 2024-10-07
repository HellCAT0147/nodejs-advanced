const path = require('path');

console.log(path.sep); // path separator

const filePath = path.join('/content/', 'subfolder', 'test.txt'); // joins all folders, subfolders and file in one string
console.log(filePath);

const base = path.basename(filePath); // extract only relative path to file (only "short" name)
console.log(base);

const absolute = path.resolve('content', 'subfolder', 'test.txt'); // like .join() but with absolute path from C/D drive
console.log(absolute);
console.log('__dirname: ' + __dirname);
console.log('__filename: ' + __filename);

const outside = path.resolve('..');
console.log(outside);

const dotJoin = path.join('/content/', 'subfolder', 'test.txt'); // .join() ...
const dotResolve = path.resolve('content', 'subfolder', 'test.txt'); // ... VS .resolve()
console.log('.join(): ' + dotJoin);
console.log('.resolve(): ' + dotResolve);
