const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const commonCtrl = require('./controllers/common');
const cfg = require('./config');

mongoose.Promise = global.Promise;
const option = {
  socketTimeoutMS: 3000000,
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}; 

mongoose.connect('mongodb://localhost:27017/' + cfg.db, option).then((data) => {
  console.log('MongoDB Connected');
}).catch(err => { 
  console.error('App starting error:', err.stack);
  process.exit(1);
});

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// const limitedAccess = new RateLimit({
//   windowMs: 1 * 60 * 1000, // 15 minutes
//   max: 15,
//   delayMs: 0,
//   statusCode: 500,
//   message: 'LIMITED ACCESS!'
// });

//Init Protection
app.use(cors());
app.use(helmet());
app.disable('etag');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static('public'))

app.use('/villa', commonCtrl.isGuest, require('./routes/villa'));

app.use(function(req, res, next) {
  // res.json(cfg.err404);
  res.json({status: 404, msg: "No endpoint found"});
});
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.log(err);
  res.json(cfg.err500);
});

module.exports = app;