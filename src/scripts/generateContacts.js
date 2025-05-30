import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
 let createContacts = [];
 for (let i = 0; i < number; i++) {
    createContacts.push(createFakeContact());
 }

 let existingContacts = [];
    try {
        const data = await readContacts();
        existingContacts = data;
    } catch (error) {
        if (error !== "ENOENT") {
            console.log(error);
            return;
    }
};
const updateContacts = [...existingContacts, ...createContacts];

try {
  await writeContacts(updateContacts);
} catch (error) {
    console.log(error);

}
};

generateContacts(5);


