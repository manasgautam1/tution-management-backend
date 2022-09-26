const ContactForm = require('../models/contactForm');

exports.contact = async (req, res)=>{
    console.log(req.body);
    const data = new ContactForm({
        name: req.body.name,
        email: req.body.email,
        query: req.body.query
    })
    await data.save();
    res.status(200).json({
        success: true,
        msg: "Form submitted successfully"
    });
}

exports.getContacts = async (req, res)=>{
    const data = await ContactForm.find();
    res.status(200).json({
        success: true,
        data: data
    });
}

exports.deleteContacts = (req, res) => {
    const id = req.params.id;
    ContactForm.findByIdAndDelete(id, (err, data) =>{
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