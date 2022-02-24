const express = require('express');
const router = express.Router();
const projectsCtrl = require('../../controllers/projects');
const multer = require('multer');
const upload = multer();

/*---------- Public Routes ----------*/
router.post('/', upload.array('tracks[]'), projectsCtrl.create); //upload.single('track2File'), upload.single('coverArt')
router.get('/', projectsCtrl.index);

/*---------- Protected Routes ----------*/




module.exports = router;