import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const allContacts = JSON.parse(data);
    const addOneNewContact = createFakeContact();
    allContacts.push(addOneNewContact);

    await fs.writeFile(PATH_DB, JSON.stringify(allContacts, undefined, 2));
    console.log('1 contact added!');
  } catch (error) {
    console.log('Add one contact error:', error);
  }
};

addOneContact();
