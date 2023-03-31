let http = require("http");

let server = http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'}); //캐릭터셋 utf-8을 하면 한글이 가능합니다.
    response.end("<H1>두번째 서버</H1>")
});

server.listen(5000,()=>{
    console.log("server start http://127.0.0.1.5000")
})

// npm install nodemon