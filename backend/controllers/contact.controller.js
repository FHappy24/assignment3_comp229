const Contact = require('../models/Contact');

// CREATE (for anyone — no auth)
exports.createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ (for Admin only)
exports.getAllContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

// DELETE (for Admin)
exports.deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Contact deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
