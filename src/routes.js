const url = require('url');
const { Create, Read, Update, Delete } = require('./CRUD/crud');

/**
 * Retorna a rota que será utilizada.
 * @param request 
 * @return pathname
 */
function urlResolse( request ){
    return url.parse(request.url, true).pathname;
}

/**
 * Retorna os parâmtros recebidos através da url
 * @param request
 * @return querys
 */
function queryResolve( request ){
    return url.parse(request.url, true).query;
}

/**
 * Retorna os parâmtros recebidos através do corpo
 * da requisição
 */
function bodyResolve( request ){
    if (request.method == 'POST') {
        var body = '';

        request.on('data', function (data) {
            body += data;

            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                request.connection.destroy();
        });

        return JSON.parse(body);
    }
}

/**
 * Trata os possíveis erros que podem ocorrer ao executar
 * a ação de cada uma das rotas.
 * @param err
 * @param response
 * @return erro para o cliente HTTP
 */
function responseError( err, response ){
    switch(err){
        case "notPost": 
            response.writeHead(405, {"Content-Type": "text/html"});
            response.end("Erro 405: esperado um médoto POST!");
            break;
        case "userOrPasswordIncorrect": 
            response.writeHead(400, {"Content-Type": "text/html"});
            response.end("Erro 400: usuário ou senha inválido!");
            break;
        default: 
            response.writeHead(400, {"Content-Type": "text/html"});
            response.end("Erro inesperado: ", err);
    }
}

/**
 * Executa a função de uma rota. Utilizado para organizar
 * o código do try catch.
 * @param request
 * @param response
 * @param paramResolve função que trata os parâmetros de acordo com o método HTTP
 * @param func função da rota em execução
 */
function routeExec(request, response, paramResolve, func){
    try{
        func(paramResolve(request), request.method);
    }catch(err){
        responseError(err, response);
    }
}

/**
 * Módulo que recebe a requisição e separa cada uma das rotas
 * para serem executadas.
 * @param request dados da requisição
 * @param response resposta para o cliente HTTP
 */
module.exports = function routes( request, response ){
    let path = urlResolse(request);
    switch(path){
        case "/create": 
            routeExec(request, response, bodyResolve, Create);
            break;

        case "/read":
            routeExec(request, response, queryResolve, Read);
            break;

        case "/update":
            routeExec(request, response, bodyResolve, Update);
            break;

        case "/delete":
            routeExec(request, response, queryResolve, Delete);
            break;
        
        default: 
            response.writeHead(404, {"Content-Type": "text/html"});
            response.end("Erro 404: a rota não existe!");
    }
}