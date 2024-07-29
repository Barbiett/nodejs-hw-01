import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const contacts = JSON.parse(data);
    const contactsLength = contacts.length;
    console.log(contactsLength);
    // console.log(JSON.parse(data).length);
  } catch (error) {
    console.log('Count contacts error:', error);
  }
};

console.log(await countContacts());
