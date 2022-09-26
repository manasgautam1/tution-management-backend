const express = require('express');
const {
    addAssignment,
    updateAssignment,
    getAssignment,
    deleteAssignment
} = require('../controllers/assignment.controller');

const router = express.Router();

router.get('/', getAssignment);
router.post('/', addAssignment);
router.delete('/:id', deleteAssignment);
router.put('/:id', updateAssignment);

module.exports = router;