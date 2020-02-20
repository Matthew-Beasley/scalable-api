const express = require('express');

const { shelterRouter } = require('./shelters');
const { dogRouter } = require('./dogs');

const apiRouter = express.Router();
apiRouter.use('/shelters', shelterRouter);
apiRouter.use('/dogs', dogRouter);

module.exports = {
  apiRouter
};
