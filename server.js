const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser'); 
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

const { connectMongoose } = require('./config/db.js');
connectMongoose();

//MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}))
app.use(cookieParser("secretcode"));

//Route files
const login = require('./routes/login');
const register = require('./routes/register');
const contact = require('./routes/contact');
const feedback = require('./routes/feedback');
const user = require('./routes/user');
const resource = require('./routes/resource');
const assignment = require('./routes/assignment');
const timetable = require('./routes/timetable');

//ROUTES
app.use('/login', login)
app.use('/register', register);
app.use('/contact-us', contact );
app.use('/feedback', feedback );
app.use('/user', user );
app.use('/resource', resource );
app.use('/assignment', assignment );
app.use('/timetable', timetable );

//START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server started succesfully on ${PORT}`);
})