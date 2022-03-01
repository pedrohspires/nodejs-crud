const { createData, readData, updateData, deleteData } = require('./CRUD/crud'); // CRUD unstructured functions

module.exports = async (req, res) => {
    // Routes method doesn't check for errors. It just executes the methods and makes the connection to the database.
    try{
        // methods create errors if necessary to handle in catch
        switch (req.method) {
            case "POST": createData(req); break;
            case "GET": readData(req); break;
            case "PUT": updateData(req); break;
            case "DELETE": deleteData(req); break;
            default: throw new Error("Unknown method");
        }
    }catch(err){
        // handles errors created in route methods
    }
}