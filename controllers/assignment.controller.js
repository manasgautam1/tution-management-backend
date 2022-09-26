const Assignment = require('../models/assignment');

exports.addAssignment = async (req, res)=>{
    console.log(req.body);
    const data = new Assignment({
        question: req.body.question,
        doneBy: []
    })
    await data.save();
    res.status(200).json({
        success: true,
        msg: "Assignment created successfully"
    });
}

exports.getAssignment = async (req, res)=>{
    const data = await Assignment.find();
    res.status(200).json({
        success: true,
        data: data
    });
}

exports.deleteAssignment = (req, res) => {
    const id = req.params.id;
    Assignment.findByIdAndDelete(id, (err, data) =>{
        if(err){
            console.log(err);
        }
        else {
            res.status(200).json({
                message: 'Assignment deleted successfully',
                data: data,
            }); 
        }
    })
};

exports.updateAssignment = (req, res) => {
    const id = req.params.id;
    Assignment.findByIdAndUpdate(id,
        { "$push": {"doneBy" : { id: req.body.id, name: req.body.name}}},
        { "new": true, "upsert": true },
        function (err, data) {
            if (err){
                console.log(err);
            }
            else{
                console.log(data);
                res.status(200).json({
                    message: 'Assignment updated successfully',
                    data: data,
                }); 
            }
        }
    )
}