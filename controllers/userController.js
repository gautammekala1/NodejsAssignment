
var User = require('../models/index').User;
var ToDo = require('../models/index').ToDo;
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports = {
    getUserDetails(req,res){
        var id = req.params.id;
        var result = {};
        User.findById(id).then(user => {
            result = user.toJSON();
            ToDo.findAll({ where: { userid: id },raw: true }).then(toDos => {
                    
                    console.log(toDos);
                    result.toDos = toDos;
                    res.status(200).json(result);
            });
        });
        
    },
     getActiveUsers(req,res){
       var promises = [];
       var finalResult = [];
       var receivedUsers;
        User.findAll({ where: { isActive: true },raw: true }).then(activeUsers => {
            let result = {};
            receivedUsers = activeUsers;
            for(user in activeUsers){
               console.log(user);
                var newPromise = ToDo.findAll({ where: { userid: user },raw: true });
                promises.push(newPromise);
        }
        res.status(200).json(receivedUsers);
    //    Promise.all(promises).then(function(toDos) {
           
    //         for (var i = 0; i < receivedUsers.length; i++) {
    //             receivedUsers.entries = toDos[i];
    //         }
            
    //     });
        
    });
    
    },
    getToDos(req,res){
            var id = req.params.id;

            ToDo.findAll({ where: { userid: id, targetDate: {
                [Op.gte]: '2017-10-28', 
                [Op.lte]: '2017-10-29',  
              } },raw: true }).then(toDos => {
                    res.status(200).json(toDos);
            });
    },
    insertUsers(req,res){

        User.create({ fName: 'Ram',
        lName: 'Chandran',
        email: 'rc.cse91@gmail.com',
        pinCode: '600017',
        birthDate: '1991-03-28',
        isActive:true
     }).then(user => {
        console.log(user);
        res.send("User created");
    });
    }
}