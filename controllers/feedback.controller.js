const Feedback = require('../models/feedback');

exports.feedback = async (req, res)=>{
    console.log(req.body);
    const data = new Feedback({
        name: req.body.name,
        email: req.body.email,
        feedback: req.body.feedback
    })
    await data.save();
    res.status(200).json({
        success: true,
        msg: "Form submitted successfully"
    });
}

exports.getFeedback = async (req, res)=>{
    const data = await Feedback.find();
    res.status(200).json({
        success: true,
        data: data
    });
}

exports.deleteFeedback = (req, res) => {
    const id = req.params.id;
    Feedback.findByIdAndDelete(id, (err, data) =>{
        if(err){
            console.log(err);
        }
        else {
            res.status(200).json({
                message: 'Feedback deleted successfully',
                data: data,
            }); 
        }
    })
  };