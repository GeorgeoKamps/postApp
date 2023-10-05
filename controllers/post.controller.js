const e = require('express');
const postService = require('../services/post.services');

exports.findAll = async (req, res)=> {
    console.log("Find all posts")

    try{
        const result = await postService.findAll();
        res.status(200).json({status: true, data: result});
        console.log("Success in finding all posts");
    } catch (err){
        res.status(400).json({status: false, data: error});
        console.log("Problem in finding all post");
    }
}

exports.findOne = async(req, res) =>{
    const id = req.params.id;
    console.log("find post with id", id);

    try{
        const result = await postService.findOne(id);
        res.status(200).json({status: true, data: result});
        console.log("Success in finding post");
    } catch(error) {
        res.status(400).json({status: false, data: error});
        console.log("Problem in finding post");
    }
}


exports.create = async(req, res) =>{
    const data = req.body;
    console.log("Insert post ", data.title);

    try{
        const result = await postService.create(data);
        res.status(200).json({status: true, data: result});
        console.log("Success in saving post");
    } catch(error) {
        res.status(400).json({status: false, data: error});
        console.log("Problem in saving post");
    }
}

exports.updatePost = async(req, res)=> {
    const id = req.params.id;
    console.log("Update post with id ", id);

    try{
        const result = await postService.updatePost(req.body);
        res.status(200).json({status: true, data: result});
        console.log("Success in updating post");
    } catch(error) {
        res.status(400).json({status: false, data: error});
        console.log("Problem in updating post", error);
    }
}

exports.updateCategory = async(req, res)=> {
    const id = req.params.id;
    console.log("Update post category ");

    try{
        const result = await postService.updateCategory(req.body);
        res.status(200).json({status: true, data: result});
        console.log("Success in updating post category");
    } catch(error) {
        res.status(400).json({status: false, data: error});
        console.log("Problem in updating post category", error);
    }
}

exports.deletePost = async(req, res)=> {
    const id = req.params.id;
    console.log("delete post  ");

    try{
        const result = await postService.deletePost(id);
        res.status(200).json({status: true, data: result});
        console.log("Success in deleting post ");
    } catch(error) {
        res.status(400).json({status: false, data: error});
        console.log("Problem in deleting post ", error);
    }
}

exports.deleteCategories = async(req, res)=> {
    const id = req.params.id;
    console.log("remove categories  ");

    try{
        const result = await postService.deleteCategories(req.body);
        res.status(200).json({status: true, data: result});
        console.log("Success in removing categories ");
    } catch(error) {
        res.status(400).json({status: false, data: error});
        console.log("Problem in removing categories ", error);
    }
}