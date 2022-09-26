const express = require('express');
const {
    getUsers,
    deleteUsers
} = require('../controllers/user.controller');

const router = express.Router();

router.get('/', getUsers);
router.delete('/:id', deleteUsers);

module.exports = router;