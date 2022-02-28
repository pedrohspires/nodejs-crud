const { createData, readData, updateData, deleteData } = require('./CRUD/crud'); // CRUD unstructured functions

module.exports = async (req, res) => {
    try{
        switch (req.method) {
            case "POST": createData(req); break;
            case "GET": readData(req); break;
            case "PUT": updateData(req); break;
            case "DELETE": deleteData(req); break;
        }
    }catch(err){
        // erros que podem ocorrer ao tentar executar uma rota
    }
}