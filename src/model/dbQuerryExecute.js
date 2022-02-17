/**
 * Abstração da função que executa uma query no banco de dados
 * 
 * @param db é o banco de dados que irá receber a consulta
 * @param query é a query que deve ser rexecutada
 */
module.exports = function ( db, query ){
    return new Promise((resolve, reject)=>{
        db.query(query, (err, result)=>{
            if(err)
                return reject(err);
            return resolve(result);
        })
    });
}