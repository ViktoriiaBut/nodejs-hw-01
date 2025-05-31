import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {

    try {
    const existingContacts = await readContacts();
    return existingContacts;
    } catch (error) {
        console.log(error);
        }
};

console.log(await getAllContacts());
