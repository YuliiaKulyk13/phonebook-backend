const Contact = require("../db/model/contactModel");

const getAll = async () => {
  const contacts = await Contact.find();
  return contacts;
};

const addContact = async (contact) => {
  const newContact = await Contact.create(contact);
  return newContact;
};

module.exports = {
  getAll,
  addContact,
};
