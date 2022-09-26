const Timetable = require('../models/timetable');

exports.addTimetable = async (req, res)=>{
    console.log(req.body);
    const data = new Timetable({
        student: {
            id: req.body.id,
            name: req.body.name
        },
        table: {
            monday: {
                first: req.body.monday.first,
                second: req.body.monday.second,
                third: req.body.monday.third,
                fourth: req.body.monday.fourth
            },
            tuesday: {
                first: req.body.tuesday.first,
                second: req.body.tuesday.second,
                third: req.body.tuesday.third,
                fourth: req.body.tuesday.fourth
            },
            wednesday: {
                first: req.body.wednesday.first,
                second: req.body.wednesday.second,
                third: req.body.wednesday.third,
                fourth: req.body.wednesday.fourth
            },
            thursday: {
                first: req.body.thursday.first,
                second: req.body.thursday.second,
                third: req.body.thursday.third,
                fourth: req.body.thursday.fourth
            },
            friday: {
                first: req.body.friday.first,
                second: req.body.friday.second,
                third: req.body.friday.third,
                fourth: req.body.friday.fourth
            },
            saturday: {
                first: req.body.saturday.first,
                second: req.body.saturday.second,
                third: req.body.saturday.third,
                fourth: req.body.saturday.fourth
            },
        }
    })
    await data.save();
    res.status(200).json({
        success: true,
        msg: "Timetable created successfully"
    });
}

exports.getTimetable = async (req, res)=>{
    const data = await Timetable.find();
    res.status(200).json({
        success: true,
        data: data
    });
}

exports.deleteTimetable = (req, res) => {
    const id = req.params.id;
    Timetable.findByIdAndDelete(id, (err, data) =>{
        if(err){
            console.log(err);
        }
        else {
            res.status(200).json({
                message: 'Timetable deleted successfully',
                data: data,
            }); 
        }
    })
};

exports.updateTimetable = (req, res) => {
    const id = req.params.id;
    Timetable.updateOne({_id: id}, 
        {$set: {'table': {
            monday: {
                first: req.body.monday.first,
                second: req.body.monday.second,
                third: req.body.monday.third,
                fourth: req.body.monday.fourth
            },
            tuesday: {
                first: req.body.tuesday.first,
                second: req.body.tuesday.second,
                third: req.body.tuesday.third,
                fourth: req.body.tuesday.fourth
            },
            wednesday: {
                first: req.body.wednesday.first,
                second: req.body.wednesday.second,
                third: req.body.wednesday.third,
                fourth: req.body.wednesday.fourth
            },
            thursday: {
                first: req.body.thursday.first,
                second: req.body.thursday.second,
                third: req.body.thursday.third,
                fourth: req.body.thursday.fourth
            },
            friday: {
                first: req.body.friday.first,
                second: req.body.friday.second,
                third: req.body.friday.third,
                fourth: req.body.friday.fourth
            },
            saturday: {
                first: req.body.saturday.first,
                second: req.body.saturday.second,
                third: req.body.saturday.third,
                fourth: req.body.saturday.fourth
            },
        }}},
        function (err, data) {
            if (err){
                console.log(err);
            }
            else{
                console.log(data);
                res.status(200).json({
                    message: 'Timetable updated successfully',
                    data: data,
                }); 
            }
        }
    )
}