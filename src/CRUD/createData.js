const requestResolve = require('../requestResolve');

/**
 * Check if a product already exists
 * 
 * @param {string} name - name of the product
 * @param {object} database - a configured database
 * @return {boolean} - true if product already exists or false if not
 */
async function productExists(name, database) {
    const connection = await database.connect();
    const [rows] = await connection.query('select * from product where name=?', name);
    if(rows.length > 0) return true;
    return false;
}

/**
 * Check if a data to insert into database is valid for the insertiion
 * 
 * @param {object} body - http body request object to insert into database
 * @param {object} database - a configured database
 * @return {boolean} - true if data is valid or false if not
 */
function dataIsValid(body, database) {
    if(!body.name || !body.cathegory || !body.price || !body.stock)
        return false;
    if(productExists(body.name, database))
        return false;
    return true;
}

/**
 * Create the connection to the database and run the query in the database
 * 
 * @param {object} body - http body request object to insert into database
 * @param {object} database - a configured database
 */
async function queryExec(body, database){
    const connection = await database.connect();
    const result = await connection.query(
        'insert into product (name, description, cathegory, price, stock) values (?,?,?,?,?);',
        [body.name, body.description, body.cathegory, body.price, body.stock]
    );
    console.log(result);
}


/**
 * Function to create a new data in the database
 * 
 * @param {Object} req - the request object
 * @param {Object} database - the database configured
 */
module.exports = async (req, database) => {
    if(req.method !== 'POST')
        throw new Error("Method not supported"); // the required method is POST to create a new data in the database

    // The path "/api/create" is verified before calling this function
    const body = await requestResolve.body(req);
    if(!dataIsValid(body, database))
        throw new Error("Invalid data");

    try{
        queryExec(body, database);
    }catch(err){
        console.log('Unknow error: ' + err.message);
    }
}