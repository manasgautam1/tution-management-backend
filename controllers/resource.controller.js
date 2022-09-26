const Resource = require('../models/resource');

exports.addResource = async (req, res)=>{
    console.log(req.body);
    const data = new Resource({
        title: req.body.title,
        link: req.body.link
    })
    await data.save();
    res.status(200).json({
        success: true,
        msg: "Resource added successfully"
    });
}

exports.getResources = async (req, res)=>{
    const data = await Resource.find();
    res.status(200).json({
        success: true,
        data: data
    });
}

exports.deleteResource = (req, res) => {
    const id = req.params.id;
    Resource.findByIdAndDelete(id, (err, data) =>{
        if(err){
            console.log(err);
        }
        else {
            res.status(200).json({
                message: 'Resource deleted successfully',
                data: data,
            }); 
        }
    })
  };