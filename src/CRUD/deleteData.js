const database = require('../database');
const requestResolve = require('../requestResolve');

/**
 * Checks if the name of the product is valid
 * 
 * @param {Object} body - the body of the request
 * @returns {boolean} - true if name is valid, false otherwise
 */
function bodyIsValid(body){
    if(body.name)
        return true;
    return false;
}

/**
 * Create query and execute in the database
 * 
 * @param {String} name - name of the product to delete
 */
async function queryExec(name){
    const connection = await database.connect();
    let query = 'delete from product where name=?;';
    connection.query(query, name);
}

/**
 * /delete function route
 * 
 * @param {Object} req - the request object
 */
module.exports = async (req) => {
    if(req.method !== 'DELETE')
        throw new Error('Invalid method: ' + req.method);
    
    const body = await requestResolve.body(req);
    console.log(body);
    if(!bodyIsValid(body))
        throw new Error('Invalid body: product name not specified!');
    
    queryExec(body.name);
}