const { client } = require('./client');

const createDog = async ({ dogName, shelterId }) => {
  const sql = 'INSERT INTO dogs (dog_name, shelter_id) VALUES ($1, $2) RETURNING *';
  const data = await client.query(sql, [dogName, shelterId]);
  return data.rows;
}

const readDogs = async () => {
  const sql = 'SELECT * FROM dogs';
  const data = await client.query(sql);
  return data.rows;
}

module.exports = {
  createDog,
  readDogs
}