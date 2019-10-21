const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
const app = express();

var { MyStud } = require('./studschema.js');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/student', { useUnifiedTopology: true, useNewUrlParser: true });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body);
    var stud_data = req.body;

    var stud = new MyStud(stud_data);
    stud.save().then(function (data) {
        res.json({
            message: "success"
        })
    }).catch(function (err) {
        res.status(500).json({
            message: "Error"

        })
    })

});

app.get('/getStudentDetails', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    MyStud.find().then(function (details) {
        console.log(details);
        res.json(details)
    }).catch(function (err) {
        res.status(500).json({
            message: "Error"
        })
    })
});


app.get('/retrieve_from_id/:id', function (req, res) {
    MyStud.findById(req.params.id).then(function (onedata) {
        res.json(onedata)
        console.log(onedata);

    }).catch(function (err) {
        res.status(500).json({
            message: "Error"
        })
    })
});

app.put('/updatestudent/:id', function (req, res) {
    MyStud.findById(req.params.id).then(function (details) {
        console.log(details);
        
        details.email = req.body.email;
        details.save().then(function (UpdatedDetails) {
            res.json({
                message: "success"
            })
            console.log('Details Updated');
        })
    }).catch(function (err) {
        console.log(err);
    })
});

app.delete('/deleteStudent/:id',(req,res) =>{
    MyStud.findByIdAndRemove(req.params.id).then(function(userData){
            res.status(200).json({
                message: 'success'
            })
    }).catch(function(err){
            res.status(500).json({
            message: "Error"
        })
    })
})


app.listen(3000);
