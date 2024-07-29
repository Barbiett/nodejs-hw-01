import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const allContacts = JSON.parse(data);
    for (let i = 0; i < number; i++) {
      const newFakeContact = createFakeContact();
      allContacts.push(newFakeContact);
    }
    fs.writeFile(PATH_DB, JSON.stringify(allContacts, undefined, 2));
    console.log('New contact(s) added.');
  } catch (error) {
    console.log('Generate new contact(s) error:', error);
  }
};

generateContacts(5);
