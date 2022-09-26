const mongoose = require('mongoose');

exports.connectMongoose = () => {
    mongoose.connect('mongodb+srv://school:school123@cluster0.qmgv9xo.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
}