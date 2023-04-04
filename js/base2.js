var express = require("express")
var app = express(); //서버 만들었음

app.use((request,response)=>{
    response.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    response.end("<H1>기본 페이지</H1>");
});

app.listen(4000,()=>{
    console.log("server start http://127.0.0.1:4000")
})