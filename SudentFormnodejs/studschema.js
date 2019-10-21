var mongoose = require('mongoose');
var MyStud = mongoose.model('student_details', {
    stud_name: {
        type: String
    },
    gender: {
        type: String
    },
    email: {
        type: String
    }
    // phone:{
    //     type:Number
    // },

    // country:{
    //     type:String
    // },
    // state:{
    //     type:String
    // },
    // city:{
    //     type:String
    // },
    // previous_school:{
    //     type:Number
    // },
    // percentage:{
    //     type:Number
    // },
    // maths:{
    //     type:Number
    // },
    // physics:{
    //     type:Number
    // },
    // chemistry:{
    //     type:Number
    // },
    // computer_science:{
    //     type:Number
    // }




})
module.exports = { MyStud };