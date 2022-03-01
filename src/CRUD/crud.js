const createData = require('./createData');
const readData = require('./readData');
const updateData = require('./updateData');
const deleteData = require('./deleteData');

// Object containing all the methods needed by crud.
module.exports = {
    createData, // create a new data in the database
    readData, // read an existing data in the database
    updateData, // update an existing data in the database
    deleteData // delete an existing data in the database
}