const db = require('../../data/db-config')

const getAll = async () => {
  try {
    return await db('cards')
  } catch (err) {
    return []
  }
}

const getById = async (id) => {
  return await db('cars').where('id', id).first()
}

const create = async car => {
  const [id] = await db('cars').insert(car)
  return await getById(id)
}

module.exports = {
  getAll,
  getById,
  create
}