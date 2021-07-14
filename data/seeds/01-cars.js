
exports.seed = knex => {
    return knex('cars').truncate()
        .then(function () {
            return knex('cars').insert([
                    //vin, make, model, mileage, title, transmission
                    {vin: '12345678901234567', make: 'Chevy', model: 'Silverado', mileage: 100000, title: 'Clear', transmission: 'Automatic'},
                    {vin: 'ABCDEFGHIJKLMNOPQ', make: 'Honda', model: 'Accord', mileage: 245582, transmission: 'Standard'},
                    {vin: '1AF5FEAGG51AGE5GA', make: 'Hyundai', model: 'Elantra', mileage: 211585}
                ])
        })
}

