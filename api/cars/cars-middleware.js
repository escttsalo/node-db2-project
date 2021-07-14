const Car = require('./cars-model')

const checkCarId = async (req, res, next) => {
  try{
    const { id } = req.params
    const car = await Car.getById(id)
    if (car) {
      req.car = car
      next()
    } else {
      res.status(404).json({message: 'car with id <car id> is not found'})
    }
  } catch (err) {
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
}