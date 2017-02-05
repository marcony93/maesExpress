'use strict'
const express = require('express'),
      paths = require('path'),
      favicon = require('serve-favicon'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      index = require('./routes/index'),
      aboutUs = require('./routes/aboutUs'),
      login = require('./routes/login'),
      register = require('./routes/register'),
      services = require('./routes/services'),
      users = require('./routes/users');
      
module.exports = function(connection)
{
  var methods = require('./controllers/metodos')(connection);
  var app = express();
  // view engine setup
  app.set('views', paths.join(__dirname, 'views'));
  app.set('view engine', 'hbs');

  // uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(paths.join(__dirname, 'public')));
  app.use('/', index);
  app.use('/login', login);
  app.use('/aboutUs', aboutUs);
  app.use('/services', services);
  app.use('/register', register);
  app.use('/api', methods);

//   app.get('/api/producto',(req,res) => 
//   {
//     client.get((respuesta) => 
//     {
//       res.status(200).send({products:respuesta});
//     });
//   });

//  app.get('/api/pro',(req,res) => 
//   {
//     client.getWhere((respuesta) =>
//     {
//           res.status(200).send({j:respuesta})
//     })
//   });

  // app.post('/api/save',(req,res) => 
  // {
  //   var respuesta = new productModel(req.body.IdProductor,req.body.Nombreroductor)
  //   productCtr.saveProducts(connection,respuesta,(respuesta) => 
  //   {
  //     res.status(200).send({products:respuesta});
  //   });
    
  // });

  // catch 404 and forward to error handler
  app.use((req, res, next) => 
  {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handler
  app.use((err, req, res, next) => 
  {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  return app;
};