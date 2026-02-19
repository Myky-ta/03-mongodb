const express = require('express');
const ctrl = require('../controllers/contactsController');

const router = express.Router();

router.get('/', ctrl.getContacts);
router.get('/:contactId', ctrl.getContact);
router.post('/', ctrl.createContact);
router.put('/:contactId', ctrl.updateContact);
router.delete('/:contactId', ctrl.deleteContact);
router.patch('/:contactId/favorite', ctrl.updateFavorite);

module.exports = router;
