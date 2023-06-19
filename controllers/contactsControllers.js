const { getAll, addContact } = require("../services/contactsServices");

const getAllCtrl = async (req, res) => {
  const contacts = await getAll();
  res.json(contacts);
};

const addContactCtrl = async (req, res) => {
  const contact = await addContact(req.body);
  res.status(201).json(contact);
};

module.exports = {
  getAllCtrl,
  addContactCtrl,
};
