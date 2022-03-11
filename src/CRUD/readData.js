const database = require('../database');

/**
 * Execute the query in the database
 * 
 * @returns all rows of the database
 */
async function queryExec(){
    const connection = await database.connect();
    const [rows] = await connection.query('select * from product;');
    return rows;
}

/**
 * Read all products in the database
 * 
 * @param {object} req - http request object
 * @param {object} res - http response object
 */
module.exports = async (req, res) => {
    if(req.method !== 'GET')
        throw new Error('Method not supported');
    
    res.write(JSON.stringify(await queryExec()));
}