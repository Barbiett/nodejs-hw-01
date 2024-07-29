import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const contacts = JSON.parse(data);
    contacts.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('Remove last contact.');
  } catch (error) {
    console.log('Remove last contact error:', error);
  }
};

removeLastContact();
