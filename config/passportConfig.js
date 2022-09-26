const User = require('../models/user');
const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
    console.log('manas')
    passport.use(
        new localStrategy((email, password, done) => {
            console.log(email);
            User.findOne({email: email}, (err, user)=>{
                if(err) throw err;
                if(!user) return done(null, false, {message:'That email is not registered'})
                //Comparing password
                bcrypt.compare(password, user.password, (err, result)=>{
                    if(err) throw err;
                    if(result===true){
                        return done(null, user)
                    }
                    else{
                        return done(null, false, {message: 'Password is incorrect'});
                    }
                });
            });
        })
    );
    
    // Storing cookie inside browser
    passport.serializeUser((user, cb)=>{
        cb(null, user.id);
    })

    // Taking cookie and finding user
    passport.deserializeUser((id, cb)=>{
        User.findById(id, (err, user)=>{
            // const userInfo = {
            //     email: user.email,
            //     name: user.name
            // }
            // cb(err, userInfo);
            cb(err, user);
        })
    })   
}