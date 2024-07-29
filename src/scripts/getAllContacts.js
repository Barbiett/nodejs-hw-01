import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const allContacts = JSON.parse(data);
    console.log(allContacts);
    console.log('All contacts show');
  } catch (error) {
    console.log('Get all contacts error:', error);
  }
};

console.log(await getAllContacts());
