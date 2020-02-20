const { client } = require('./client');

const createShelter = async ({ shelterName }) => {
  const sql = 'INSERT INTO shelters (shelter_name) VALUES ($1) RETURNING *';
  const data = await client.query(sql, [shelterName]);
  return data.rows;
}

const readShelters = async () => {
  const sql = 'SELECT * FROM shelters';
  const data = await client.query(sql);
  return data.rows;
}

module.exports = {
  createShelter,
  readShelters
}