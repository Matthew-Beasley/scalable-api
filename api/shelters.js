const express = require('express');
const { createShelter, readShelters } = require('../datalayer/shelters');

const shelterRouter = express.Router();

shelterRouter.post('/:sheltername', async (req, res, next) => {
  try {
    const { sheltername } = req.params;
    const response = await createShelter(sheltername);
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
});

shelterRouter.get('/', async (req, res, next) => {
  try {
    const response = await readShelters();
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
});

module.exports = { shelterRouter };
