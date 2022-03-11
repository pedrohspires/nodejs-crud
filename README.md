# NodeJsCRUD
In this repository there is a simple example of CRUD in Node.js<br><br>

# Most important observation
* This crud was developed with as few third-party packages and frameworks as possible, using only Node.js' own tools. The only package used is mysql to connect to the database.
<br><br>

<hr>

## About modification
The project has been modified for a new database. Before the modification, CRUD was made to register a user in the database. Now a new database stores a simple product. See "What data is being used for CRUD?" for more details on data stores.<br><br>

<hr>

## CRUD
CRUD is an acronym of:
* Create
* Read
* Update
* Delete
<br><br>

<hr>

## What data is being used for CRUD? (Before modification)
The CRUD stores users with:
* Name
* Username
* Email
* Password<br><br>

<hr>

## What data is being used for CRUD? (After modification)
The CRUD stores users with:
* Product name
* Description
* Cathegory
* Price
* Stock<br><br>

<hr>

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
* Enter the src/ folder and use "node app.json" to execute server.<br><br>

<hr>

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
All errors return JSON to client api with statuscode 400 - Bad request<br><br>

<hr>

## O que aprendi no projeto (PT-BR)
Este projeto foi de grande aprendizado para mim, pois foi o primeiro que fiz realmente sozinho, pesquisando, tentando, errando e corrigindo. Dificuldades que nunca pensei que poderia ter, como executar uma query no banco de dados. Sem dúvidas a maior dificuldade foi entender (e ainda muito pouco) como funciona try catch e async/await. Definitivamente não é possível aprender apenas assistindo cursos, aulas e tutoriais prontos. Quando é necessário colocar conhecimentos em prática, o conceito de autodidata é simplesmente a coisa mais importante.<br>
* Outras dificuldades
    * Entender async/await
    * Criar uma conexão com banco de dados
    * Executar e tratar os resultados das query do banco de dados
    * O uso do módulo mysql2 em vez do mysql
    * Evitar que a api pare de executar com try catch
    * Organização de arquivos

<hr>

## What I learned on the project (EN)
This project was a great learning experience for me, because it was the first one I did really alone, researching, trying, making mistakes and correcting. Difficulties I never thought I could have, like running a query against the database. Undoubtedly the biggest difficulty was understanding (and still very little) how try catch and async/await works. It is definitely not possible to learn just by watching ready-made courses, classes and tutorials. When it is necessary to put knowledge into practice, the concept of self-taught is simply the most important thing.
* Other difficulties
    * Understand async/await
    * Create a database connection
    * Execute and handle the results of database queries
    * Using mysql2 module instead of mysql
    * Prevent the api from running with try catch
    * Files Organization
