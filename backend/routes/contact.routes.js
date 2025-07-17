const express = require('express');
const router = express.Router();
const {
  createContact,
  getAllContacts,
  deleteContact
} = require('../controllers/contact.controller');
const verifyToken = require('../middleware/verifyToken');

router.post('/', createContact); // Public contact form
router.get('/', verifyToken, getAllContacts); // Protected for admin
router.delete('/:id', verifyToken, deleteContact); // Protected for admin

module.exports = router;
