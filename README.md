# NodeJsCRUD
In this repository there is a simple example of CRUD in Node.js<br><br>

# Most important observation
* This crud was developed with as few third-party packages and frameworks as possible, using only Node.js' own tools. The only package used is mysql to connect to the database.
<br><br>

## About modification
The project has been modified for a new database. Before the modification, CRUD was made to register a user in the database. Now a new database stores a simple product. See "What data is being used for CRUD?" for more details on data stores.

## CRUD
CRUD is an acronym of:
* Create
* Read
* Update
* Delete
<br><br>

## What data is being used for CRUD? (Before modification)
The CRUD stores users with:
* Name
* Username
* Email
* Password

## What data is being used for CRUD? (After modification)
The CRUD stores users with:
* Product name
* Description
* Cathegory
* Price
* Stock

## How to use?
* Clone this project and extract data.
* Rename the "config.json.example" file to "config.json".
* Complete the "config.json" with your database configuration.
* Run databaseModelWorkbench in the Workbench or create a new database with:
    * name - for the product name
    * description - for the product description
    * cathegory - for the product cathegory
    * price - for the product price
    * stock - for the product stock
* Enter in main folder and use "npm run serve" to execute server. Or
* Enter the src/ folder and use "node app.json" to execute server.

## Errors that the api generates
* If the /api/ not exists in the url
* If the /api/"crud route" is different of the CRUD routes (create, read, update, delete)
* If:
    * /create do not POST method
    * /read do not GET method
    * /update do not PUT method
    * /delete do not DELETE method
* If in the /create
    * Some mandatory field is not defined
    * Item already exists
* If in the /update
    * Name field is not defined
    * Item not exists in the database
* If in the /delete
    * Name field is not defined
<br>
All errors return JSON to client api with statuscode 400 - Bad request