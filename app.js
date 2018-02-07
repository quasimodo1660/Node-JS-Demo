// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    console.log('client request at' ,request.headers.host);
    // this is how we do routing:
    if(request.url === '/') {
        // console.log(request.headers['user-agent']);
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write('<p>'+request.headers['user-agent']+'</p>'); 
            response.end(); // finished!
        });
    }

    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
        }
});

var server1 = http.createServer(function (request,response){
    console.log('client request URL: ', request.url);
    console.log('client request at ' ,request.headers.host);
    if(request.url === '/') {
        // console.log(request.headers['user-agent']);
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write(contents); 
            response.end(); // finished!
        });
    }
    else if(request.url === '/car'){
        fs.readFile('car.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write(contents); 
            response.end(); // finished!
        });
    }
    else if(request.url === '/iron'){
        fs.readFile('iron.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write(contents); 
            response.end(); // finished!
        });
    }
    else if(request.url === '/images/glc.jpg'){
        fs.readFile('./images/glc.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'}); 
            response.write(contents); 
            response.end(); // finished!
        });
    }
    else if(request.url === '/images/ironman.jpg'){
        fs.readFile('./images/ironman.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'}); 
            response.write(contents); 
            response.end(); // finished!
        });
    }
    else {
        response.writeHead(404);
        response.end('File not found!!!');
        }
})
server.listen(6789);
server1.listen(7077);
// print to terminal window
console.log("Running in localhost");
