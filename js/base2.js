var express = require("express")
var app = express(); //서버 만들었음

var ejs = require("ejs");
app.set("view engine",ejs)
app.use(express.urlencoded({extended:false})); //얘를 넣어줘야 바디태그를 쓸수있단다

app.use((request,response)=>{
    response.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    response.end("<H1>기본 페이지</H1>");
});

app.listen(4000,()=>{
    console.log("server start http://127.0.0.1:4000")
})