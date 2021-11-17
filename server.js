const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
let dataController = require('./controllers/data');

const app = express();

const mongoose = require('mongoose')

const db = 'mongodb+srv://admin:node-DB-collection1465@cluster0.moilb.mongodb.net/node-data?retryWrites=true&w=majority'

mongoose
    .connect(db)
    .then((res) => console.log('Connected to DB'))
    .catch((error) => console.log(error))


app.listen(3012, () => {
    console.log('Server started')
})

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`DB ROOTS:
    /data
    /data/:id
    /datadelete`)
})

app.get('/data', dataController.all);

app.get('/data/:id', dataController.findById)

app.post('/data', dataController.create);

app.put('/data/:id', dataController.update);

app.delete('/data/:id', dataController.deleteOne);

app.get('/datadelete', dataController.deleteAll);
