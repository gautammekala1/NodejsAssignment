var express = require('express');
var router  = express.Router();
var toDoController = require('../controllers/toDoController');
router.get('/id/:id',toDoController.getToDoDetails);

module.exports = router;