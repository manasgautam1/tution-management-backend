const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.login = (req, res)=>{
    User.findOne({email: req.body.email}, async (err,user)=>{
        if(err) {
            console.log(err)
        }
        if(user) {
            console.log(user);
            //Comparing password
            bcrypt.compare(req.body.password, user.password, (err, result)=>{
                if(err) {
                    console.log(err)
                }
                if(result===true){
                    // console.log(user);
                    
                    res.status(200).json({
                        success: true,
                        msg: "Logged in successfully",
                        data: user
                    });
                }
                else{
                    res.status(200).json({
                        success: false,
                        msg: "Password is incorrect"
                    });
                }
            });
        }
        else{
            res.status(200).json({
                success: false,
                msg: "User does not exists"
            });
        }
    })
}


exports.register = (req, res)=>{
    console.log(req.body);
    User.findOne({email: req.body.email}, async (err,doc)=>{
        if(err) throw err;
        if(doc) res.status(200).json({
            success: false,
            msg: "User Already Exists"
        });
        if(!doc){

            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            })
            await newUser.save();
            res.status(200).json({
                success: true,
                msg: "User Registered Successfully"
            });
        }
    })
}

exports.getUsers = async (req, res)=>{
    const data = await User.find();
    res.status(200).json({
        success: true,
        data: data
    });
}

exports.deleteUsers = (req, res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id, (err, data) =>{
        if(err){
            console.log(err);
        }
        else {
            res.status(200).json({
                message: 'Contact deleted successfully',
                data: data,
            }); 
        }
    })
  };