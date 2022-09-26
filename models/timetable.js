const mongoose = require('mongoose');
const timetableSchema = new mongoose.Schema({
    student: {
        id: String,
        name: String
    },
    table: {
        monday: {
            first: String,
            second: String,
            third: String,
            fourth: String
        },
        tuesday: {
            first: String,
            second: String,
            third: String,
            fourth: String
        },
        wednesday: {
            first: String,
            second: String,
            third: String,
            fourth: String
        },
        thursday: {
            first: String,
            second: String,
            third: String,
            fourth: String
        },
        friday: {
            first: String,
            second: String,
            third: String,
            fourth: String
        },
        saturday: {
            first: String,
            second: String,
            third: String,
            fourth: String
        },
    }
});
module.exports = mongoose.model('Timetable', timetableSchema);