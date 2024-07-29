// import fs from 'node:fs/promises';
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 7));
// console.log(3, 5);

// const message = 'Hello world';

// console.log(message);
// const hello = await fs.readFile('src/hello.txt');
// console.log(hello);
// console.log('stop');
// const buffer = await fs.readFile('src/hello.txt');

// console.log(buffer.toString('utf-8'));

// READ FILE
// (async () => {
//   try {
//     const data = await fs.readFile('src/hello.txt', 'utf8');
//     console.log('Вміст файлу:', data);
//   } catch (err) {
//     console.error('Помилка читання файлу:', err);
//   }
// })();

//  CREATE NEW FILE
// (async () => {
//   const data = 'na ufdyj!';
//   try {
//     await fs.writeFile('newFile.txt', data, 'utf-8');
//     console.log('haha!');
//   } catch (error) {
//     console.error('error:', error);
//   }
// })();

// CHANGE / APPEND FILE
// (async () => {
//   const data = 'Це дані, які ми додаємо до файлу.';
//   try {
//     await fs.appendFile('output.txt', data, 'utf8');
//     console.log('Дані успішно додані до файлу.');
//   } catch (err) {
//     console.error('Помилка додавання даних до файлу:', err);
//   }
// })();

// RENAME / REPLACE FILE
// (async () => {
//   try {
//     await fs.rename('newfile.txt', 'output.txt');
//     console.log('Файл або каталог успішно перейменовано або переміщено.');
//   } catch (err) {
//     console.error('Помилка перейменування або переміщення:', err);
//   }
// })();

// DELETE FILE
// (async () => {
//   try {
//     await fs.unlink('output.txt');
//     console.log('Файл успішно видалено.');
//   } catch (err) {
//     console.error('Помилка видалення файлу:', err);
//   }
// })();

// CHECK FILE LIST
// (async () => {
//   try {
//     const files = await fs.readdir('.');
//     console.log('Список файлів і каталогів:', files);
//   } catch (err) {
//     console.error('Помилка отримання списку файлів і каталогів:', err);
//   }
// })();

// Перевіряємо доступність файлу або каталогу за вказаним шляхом
// (async () => {
//   const path = 'newFile.txt';
//   try {
//     await fs.access(path);
//     console.log(`Файл або каталог '${path}' доступний.`);
//   } catch (err) {
//     if (err.code === 'ENOENT') {
//       console.log(`Файл або каталог '${path}' не існує.`);
//     } else {
//       console.error(
//         `Помилка перевірки доступності файлу або каталогу '${path}':`,
//         err,
//       );
//     }
//   }
// })();
