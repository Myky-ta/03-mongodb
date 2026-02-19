const Contact = require('../models/contact');

const getAllContacts = () => Contact.find();
const getContactById = (id) => Contact.findById(id);
const addContact = (data) => Contact.create(data);
const updateContact = (id, data) => Contact.findByIdAndUpdate(id, data, { new: true });
const deleteContact = (id) => Contact.findByIdAndDelete(id);
const updateStatusContact = (id, body) => Contact.findByIdAndUpdate(id, body, { new: true });

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  updateContact,
  deleteContact,
  updateStatusContact,
};
