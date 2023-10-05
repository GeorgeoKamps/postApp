const categoryServices = require('../services/category.services');

exports.findAll = async (req, res) =>{
    console.log('Find all categories');

    try{
        const result = await categoryServices.findAll();
        res.status(200).json({status:true, data: result});
        console.log("success in finding all categories");
    } catch (err){
        res.status(400).json({status:false, data: err});
        console.log('problem in finding all categories');
    }
   
}

exports.findOne = async (req, res)=>{
    const id = req.params.id;
    console.log('Find category with id', id);

    try {
        const result = await categoryServices.findOne(id);
        res.status(200).json({status:true, data: result});
        console.log("success in finding category with id", id );
    } catch(err){
        res.status(400).json({status:false, data: err});
        console.log('problem in finding category with id', id);
    }
}

exports.create = async(req, res) =>{
    console.log('Insert new category name');
    const name = req.body.name;
    
    try{
        const result = await categoryServices.create(name);
        res.status(200).json({status:true, data: result});
        console.log("success in saving categorty");
    } catch (err){
        res.status(400).json({status:false, data: err});
        console.log('problem in saving category');
    }
}

exports.update = async(req, res) =>{

    const id = req.params.id;
    console.log("Update category with id", id);

    try{
        const result = await categoryServices.update(req.body);
        res.status(200).json({status:true, data: result});
        console.log("success in updating categorty");
    } catch(err){
        res.status(400).json({status:false, data: err});
        console.log('problem in updating category');
    }
}

exports.delete = async(req,res) =>{
    const id = req.params.id;

    console.log('Delete category with id', id);

    try{
        const result = await categoryServices.deleteCategory(id);
        res.status(200).json({status:true, data: result});
        console.log("success in deleting categorty");
    } catch(err){
        res.status(400).json({status:false, data: err});
        console.log('problem in deleting category');
    }
}