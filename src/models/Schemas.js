const {model, Schema, ObjectId} = require('mongoose');

const
    doctorSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        spravkaGivenList: [],
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        refreshToken: String
        
    }),
    spravkaSchema = new Schema({
        date:{
            type: String,
            required: true
        },
        type:{
            type: String,
            required: true
        },
        patient_iin:{
            type: String,
            required: true
        },
        patient_firstname:{
            type: String,
            required: true
        },
        patient_secondname:{
            type: String,
            required: true
        },
        patient_middlename:{
            type: String,
            required: true
        },
        doctor_name:{
            type: String,
            required: true
        }
    });


const
    Doctor = model('Doctor', doctorSchema),
    Spravka = model('Spravka', spravkaSchema);

module.exports = { Doctor, Spravka };