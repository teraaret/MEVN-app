const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const config = require('./config/config'); // здесь порт и настройки для монго

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(require('./routes/posts')); // маршруты сервера

//app.get('/posts', (req, res) => {
//  res.send(
//    [{
//      title: "Hello World!",
//      description: "Hi there! How are you?"
//    }]
//  )
//})

//app.listen(process.env.PORT || config.port, () => {
//    console.log(`Server start on port ${config.port} ...`)
//});

mongoose.connect(config.dbURL, config.dbOptions);
mongoose.connection
  .once('open', () => {
    console.log(`Mongoose - successful connection ...`)
    app.listen(process.env.PORT || config.port,
      () => console.log(`Server start on port ${config.port} ...`))
  })
  .on('error', error => console.warn(error))