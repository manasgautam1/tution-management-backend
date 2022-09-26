const express = require('express');
const {
    feedback,
    getFeedback,
    deleteFeedback
} = require('../controllers/feedback.controller');

const router = express.Router();

router.get('/', getFeedback);
router.post('/', feedback);
router.delete('/:id', deleteFeedback);

module.exports = router;