const { createData, readData, updateData, deleteData } = require('./CRUD/crud'); // CRUD unstructured functions
const requestResolve = require('./requestResolve');

function apiPathValidator(url){
    let validPath = '/api/';
    for(let i in url)
        if(url[i] != validPath[i])
            return false;
    return true;
}

module.exports = async (req, res) => {
    // Routes method doesn't check for errors. It just executes the methods and makes the connection to the database.
    const url = requestResolve.path(req);
    try{
        // Throws an error for a path other than /api
        if(apiPathValidator(url))
            throw new Error ("Path is not /api");

        // methods create errors if necessary to handle in catch
        switch (url) {
            case "/api/create": await createData(req); break;
            case "/api/read": await readData(req); break;
            case "/api/update": await updateData(req); break;
            case "/api/delete": await deleteData(req); break;
            default: throw new Error("Unknown path");
        }
    }catch(err){
        console.log(err);
        // handles errors created in route methods
    }
    res.end();
}