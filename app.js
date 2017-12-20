var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const Sequelize = require('sequelize');
var userRoutes = require('./routes/user');
var toDoRoutes = require('./routes/todo');

// app.get('/',function(req,res){
//     res.send('App Running');
// });

const sequelize = new Sequelize('postgres://auvqlcaw:pt5qNp0-0QYyqxza8waC8Drxf3Mfv5Za@elmer.db.elephantsql.com:5432/auvqlcaw');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/todo', toDoRoutes);

app.listen(3000, function(req,res){
    console.log('Server is running at port 3000');
});