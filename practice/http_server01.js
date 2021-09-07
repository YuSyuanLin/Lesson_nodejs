const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200, {
        'Content-Type':'text/html'
    })   
    res.end(`<h1>Hello0000,${req.url}</h1>`);
});

server.listen(3000);
// node 習慣用3000或5000

//在專案中安裝 nodemon
//npm i --save-dev nodemon
//移除專案中的 nodemon
//npm un nodemon
//un是uninstall的縮寫