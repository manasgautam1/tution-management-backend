const express = require('express');
const {
    addTimetable,
    updateTimetable,
    getTimetable,
    deleteTimetable
} = require('../controllers/timetable.controller');

const router = express.Router();

router.get('/', getTimetable);
router.post('/', addTimetable);
router.delete('/:id', deleteTimetable);
router.put('/:id', updateTimetable);

module.exports = router;