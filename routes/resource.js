const express = require('express');
const {
    addResource,
    getResources,
    deleteResource
} = require('../controllers/resource.controller');

const router = express.Router();

router.get('/', getResources);
router.post('/', addResource);
router.delete('/:id', deleteResource);

module.exports = router;