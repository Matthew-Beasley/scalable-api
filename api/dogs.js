const express = require('express');
const { createDog, readDogs } = require('../datalayer/dogs');

const dogRouter = express.Router();

module.exports = {
  dogRouter
}