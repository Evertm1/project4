const Comment = require('../models/project');

const { v4: uuidv4 } = require("uuid");
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3(); // initialize the S3 constructor

const BUCKET = process.env.BUCKET_NAME;

module.exports = {
    create,
}

function create(req, res){
	console.log(req.body, " <- req.body", req.file, " <track", req.user)

	const filePath = `${uuidv4()}${req.file.originalname}`;
	const params = {Bucket: BUCKET, Key: filePath, Body: req.file.buffer}

	// s3 making a request to aws s3 bucket
	s3.upload(params, async function(err, data){
		// check aws error
		if (err) return res.status(400).json({err})
		// We're inside of the response from aws 
		try {
			// model talking to mongodb
			let comment = await Comment.create({
                user: req.user,
				textContent: req.body.textContent,
                responseTrackUrl: data.Location,
                responseTrackName: req.body.responseTrackName
				
			})

			comment = await comment.populate('user')

			// respond to the client
			// What file on the client can we log out this response?
			res.status(201).json({comment})


		} catch(err){
			console.log(err)
			res.status(400).json({err})
		}


	})


 }
 