const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const profileRouter = require('./routes/profile');
const postsRouter = require('./routes/posts');
const groupsRouter = require('./routes/groups');

mongoose.connect("mongodb+srv://teamboogle:wMKsYJNhTfL89k9@cluster0.nhcrc.mongodb.net/TalkWithMe?retryWrites=true&w=majority", {useNewUrlParser: true});



var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/profile', profileRouter);
// app.use('/posts', postsRouter);
// app.use('/groups', groupsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function(){
  console.log('Connection Secured');
})

module.exports = app;
