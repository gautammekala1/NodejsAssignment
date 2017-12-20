
var User = require('../models/index').User;
var ToDo = require('../models/index').ToDo;
module.exports = {
    getToDoDetails(req,res){
        var id = req.params.id;
        var result = {};
        ToDo.findById(id).then(toDo => {
                    res.status(200).json(toDo);
        });
    },
    insertToDos(req,res){

    }
}