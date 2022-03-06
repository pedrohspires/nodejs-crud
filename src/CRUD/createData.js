const requestResolve = require('../requestResolve');
const database = require('../database');

async function itemExists(name) {
    const connection = await database.connect();
    const [rows] = await connection.query("SELECT * FROM product WHERE name=?;", name);
    return rows.length > 0 ? true : false;
}

/**
 * Verifi if the body is valid
 * 
 * @param {object} body - the body of the request
 * @returns {boolean} true if body is valid
 */
async function bodyIsValid(body) {
    if(!body.name || !body.cathegory || !body.price || !body.stock)
        return false;

    if(await itemExists(body.name))
        return false;

    return true;
}

async function queryExec(body){
    if(!body.description)
        body.description = '';
    const connection = await database.connect();
    let query = "insert into product (name, description, cathegory, price, stock) values (?,?,?,?,?);";
    let values = [body.name, body.description, body.cathegory, body.price, body.stock];
    connection.query(query, values);
}

/**
 * Function used to insert a new item into the database
 * 
 * @param {object} req - http request object
 */
module.exports = async (req) => {
    if(req.method !== 'POST')
        throw new Error('Invalid method: ' + req.method);

    const body = await requestResolve.body(req);
    if(!(await bodyIsValid(body)))
        throw new Error('Incomplete body or already existing item');
    
    queryExec(body);
}