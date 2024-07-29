import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]));
    console.log('Removed all contacts');
  } catch (error) {
    console.log('Remove all contacts error:', error);
  }
};

removeAllContacts();
