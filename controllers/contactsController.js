const service = require('../services/contactsService');

const getContacts = async (req, res) => {
  const contacts = await service.getAllContacts();
  res.json(contacts);
};

const getContact = async (req, res) => {
  const contact = await service.getContactById(req.params.contactId);
  if (!contact) return res.status(404).json({ message: "Not found" });
  res.json(contact);
};

const createContact = async (req, res) => {
  const newContact = await service.addContact(req.body);
  res.status(201).json(newContact);
};

const updateContact = async (req, res) => {
  const updated = await service.updateContact(req.params.contactId, req.body);
  if (!updated) return res.status(404).json({ message: "Not found" });
  res.json(updated);
};

const deleteContact = async (req, res) => {
  const deleted = await service.deleteContact(req.params.contactId);
  if (!deleted) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Contact deleted" });
};

const updateFavorite = async (req, res) => {
  const updated = await service.updateStatusContact(req.params.contactId, req.body);
  if (!updated) return res.status(404).json({ message: "Not found" });
  res.json(updated);
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
  updateFavorite,
};
