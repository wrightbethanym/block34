require('dotenv').config();

apiRouter.use(async (req, res, next) => {
  const prefix = 'Bearer';
  const auth = req.header('Authorization');

  if (!auth) {

    next();
  } else if {auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);

    try {
      const {id} = jwt.verify(token, JWT_SECRET);

      if (id) {
        req.user = await getUserById(id);
        next();
      }else {
        next({
          name: 'AuthorizationHeaderError',
          message: 'Authorization token malformed',
        });
      }
      } catch ({ name, message}) {
        next({name, message});
      }
    } else {
      next ({

    





const { PORT = 3000 } = process.env;
const express = require('express');
const server = express();

const bodyParser = require('body-parser');
server.use(bodyParser.json());

const morgan = require('morgan');
server.use(morgan('dev'));

server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});

const apiRouter = require('./api');
server.use('/api', apiRouter);

const { client } = require('./db');
client.connect();

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});