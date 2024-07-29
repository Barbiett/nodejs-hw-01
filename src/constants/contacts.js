// import * as fs from 'node:fs/promises';
// const filePath = path.resolve('db', 'db.json');
// export const PATH_DB = fs
//   .readFile(filePath, { encoding: 'utf-8' })
//   .then(console.log)
//   .catch((error) => console.log('Error reading file:', error));

import path from 'node:path';
export const PATH_DB = path.resolve('src', 'db', 'db.json');
console.log(PATH_DB);
