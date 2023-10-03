const http= require('http');
const server = http.createServer((req, res) => {
    let url = req.url;
    // console.log(url);
    if(url==='/home'){
        
    res.setHeader('Content-Type','text/html');
    res.write('<html><head><title>My First Page</title></head> <body><h1>Welcome Home !</h1></body></html>')
    return res.end();
    }
    else if(url==='/about'){
    res.setHeader('Content-Type','text/html');
    res.write('<html><head><title>My First Page</title></head> <body><h1>Welcome to About Us page!</h1></body></html>');
    return res.end();
    }
    else if(url==='/node'){
        res.setHeader('Content-Type','text/html');
    res.write('<html><head><title>My First Page</title></head> <body><h1>Welcome to my Node Js project</h1></body></html>');
    return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html><head><title>My First Page</title></head> <body><h1>Welcome to my First Node Js Server</h1></body></html>');
    return res.end();
    // process.exit();
});
server.listen(3000);
