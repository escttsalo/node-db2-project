const db = require('../../data/db-config');

const getAll = async () => {
  try {
    const cars = await db('cars')
    return cars
  } catch (err) {
    return []
  }
};

const getById = async (id) => {
  return await db('cars').where('id', id).first()
};

const create = async car => {
  const [id] = await db('cars').insert(car)
  return await getById(id)
};

module.exports = {
  getAll,
  getById,
  create
};