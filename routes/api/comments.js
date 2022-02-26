const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/comments');
const multer = require('multer');
const upload = multer();

/*---------- Public Routes ----------*/
router.post('/:project_id', upload.single('track'), commentsCtrl.create); 


/*---------- Protected Routes ----------*/




module.exports = router;