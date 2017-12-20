var express = require('express');
var router  = express.Router();
var userController = require('../controllers/userController');

router.get('/id/:id/todaysToDos',userController.getToDos);
router.get('/id/:id',userController.getUserDetails);
router.get('/create',userController.insertUsers);
router.get('/active',userController.getActiveUsers);
module.exports = router;