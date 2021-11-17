const ObjectID = require('mongodb').ObjectID;
let db = require('../server');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    dataId: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
}, { collection: "data", timestamps: true });

const Data = mongoose.model('post', dataSchema)

module.exports = Data