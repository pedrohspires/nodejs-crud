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