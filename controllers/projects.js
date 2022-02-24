const Project = require('../models/project');


const { S3Client, CreateMultipartUploadCommand } = require( "@aws-sdk/client-s3"); 

const { v4: uuidv4 } = require("uuid");
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3(); // initialize the S3 constructor
const fs = require('fs');

const BUCKET = process.env.BUCKET_NAME;

module.exports = {
    create,
    index

}

function uploadLoadToS3(ObjFile, folder){

    var params={
        Body : ObjFile.buffer,
        Bucket: BUCKET,
        ContentType:ObjFile.mimetype,
        Key:`${folder}/${ObjFile.originalname}`
    }
    return s3.upload(params).promise();
}



async function create(req, res){
    const folderName = `project${uuidv4()}`
    const promises = req.files.map(file => uploadLoadToS3(file, folderName))
    

   
   try {
       
    const [audioLocation, imageLocation] = await Promise.all(promises)
    
    // model talking to mongodb
    let project = await Project.create({
        user: req.user,
        title: req.body.title,
        description: req.body.description,
        coverArtUrl: imageLocation.Location,  //<--- how to target a unique value?
        trackUrl: audioLocation.Location,
        trackName: req.body.track1Name,
        
    })
    // console.log(data, '<-- data object')
    res.status(201).json({project})
   } catch(err) {
       console.log(err, "<-err")
    res.status(400).json({err})
   }

 }



async function index(req, res) {
    try {
        const projects = await Project.find({}).populate("user").exec();
        res.status(200).json({ projects: projects })
    } catch (err) {
        res.status(400).json({ err });
    }
}