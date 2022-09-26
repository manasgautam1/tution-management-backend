const express = require('express');
const {
    contact,
    getContacts,
    deleteContacts
} = require('../controllers/contact.controller');

const router = express.Router();

router.get('/', getContacts);
router.post('/', contact);
router.delete('/:id', deleteContacts);

module.exports = router;