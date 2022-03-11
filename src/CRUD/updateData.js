const database = require('../database');
const requestResolve = require('../requestResolve');

/**
 * Checks if the product exists in the database
 * 
 * @param {String} name - name of product to update
 * @returns {boolean} - true if product exists, false otherwise
 */
async function itemExists(name) {
    const connection = await database.connect();
    const [rows] = await connection.query("SELECT * FROM product WHERE name=?;", name);
    return rows.length > 0 ? true : false;
}

/**
 * Checks if the product in the body is valid
 * 
 * @param {Object} body - body of http request
 * @returns {boolean} - true if body is valid, false otherwise
 */
async function bodyIsValid(body){
    if(!body.name)
        return false;

    if(!(await itemExists(body.name)))
        return false;
    
    return true;
}

/**
 * Create and execute the query in the database
 * 
 * @param {Object} body - body of http request
 */
async function queryExec(body){
    const connection = await database.connect();
    let values = [];
    let query = 'update product set'

    for(let key in body) {
        if(key === 'name')
            continue;
        if(values.length > 0)
            query += ',';
        switch(key) {
            case 'description': query += ' description=?'; break;
            case 'cathegory': query += ' cathegory=?'; break;
            case 'price': query += ' price=?'; break;
            case 'stock': query += ' stock=?'; break;
        }
        values.push(body[key]);
    }

    query += ' where name=?';
    values.push(body['name']);

    connection.query(query, values);
}

/**
 * /update function route
 * 
 * @param {Object} req - the request object
 */
module.exports = async (req) => {
    if(req.method !== 'PUT')
        throw new Error('Invalid method: ' + req.method);
    
    const body = await requestResolve.body(req);
    if(await !(bodyIsValid(body)))
        throw new Error('Invalid body: product name invalid or item not found');
    
    queryExec(body);
}