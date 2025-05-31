import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
   let createContacts = createFakeContact();
   let existingContacts = [];

    try {
      const data = await readContacts();
      existingContacts = data;
    } catch (error) {
      console.log(error);
          }

    const updateContacts = [createContacts, ...existingContacts];

    try {
        await writeContacts(updateContacts);
    } catch (error) {
      console.log(error);
          }
};

addOneContact();
