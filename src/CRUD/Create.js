const db = require('../model/bdConnection');
const queryExecute = require('../model/dbQuerryExecute');
const crypto = require('crypto');

/**
 * Cria a query para ser executada no banco de dados
 */
async function queryBuilder( user ){
    let { name, username, email, password } = user;
    let query = 'insert into users (name, username, email, password, salt, verified) values ';
    let salt = crypto.randomBytes(10).toString('base64');
    console.log(salt);

    password = crypto.createHash('sha256').update(password+salt).digest('base64');
    query += "('"+name+"', '"+username+"', '"+email+"', '"+password+"', '"+salt+"', false);";
    
    queryExecute(db, query);
}

/**
 * Insere novos dados no banco de dados
 */
module.exports = function Create( user, method ){
    if(!(method == "POST"))
        throw "Erro: método não é compatível!";
    
    console.log(user);

    if(!user)
        throw "Erro: dados para inserção não definidos!";
    
    queryBuilder(user);
}