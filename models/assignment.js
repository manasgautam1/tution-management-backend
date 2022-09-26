const mongoose = require('mongoose');
const assignmentSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    doneBy: {
        type: [{
            id : String,
            name: String
        }]
    }
});
module.exports = mongoose.model('Assignment', assignmentSchema);