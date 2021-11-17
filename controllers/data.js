const Data = require('../models/data');
const express = require('express');

exports.all = (req, res) => {
    const title = 'Data';
    Data
        .find()
        .then((data) => {
            res.send(data)
            console.log(`DB has been inspected...`)
        })
        .catch((error) => console.log(error))
}

exports.findById = (req, res) => {
    const title = 'Data';
    Data
        .findById(req.params.id)
        .then((data) => {
            res.send(data)
            console.log(`DB Object ${req.params.id} has been found...`)
        })
        .catch((error) => console.log(error))
}

exports.create = async (req, res) => {
    const { dataId, cost, label, time, link } = req.body;
    const data = new Data({ dataId, cost, label, time, link  });

    data
        .save()
        .then((result) => {
            res.send(result)
            console.log(`DB Object ${data} has been created...`)
        })
        .catch((error) => {
            console.log(error);
        })
}

exports.update = async (req, res) => {
    const { dataId, cost, label, time, link } = req.body;

    const title = 'Data';
    Data
        .findByIdAndUpdate(req.params.id, req.body)
        .then((data) => {
            res.send(data)
            console.log(`DB Object ${req.params.id} has been updated...`)
        })
        .catch((error) => console.log(error))
}

exports.deleteOne = (req, res) => {
    const title = 'Data';
    Data
        .findByIdAndDelete(req.params.id)
        .then(result => {
            res.sendStatus(200)
            console.log(`DB Object ${req.params.id} has been deleted...`)
        })
        .catch((error) => console.log(error))
}

exports.deleteAll = (req, res) => {
    const title = 'Data';
    Data
        .collection.drop()
        .then(result => {
            res.sendStatus(200)
            console.log('DB has been deleted...')
        })
        .catch((error) => console.log(error))
}