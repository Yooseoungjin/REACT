var express = require("express")
var app = express(); //서버 만들었음
let fs = require("fs");
let ejs = require("ejs");

var app = express(); //html연결.js

app.use(express.urlencoded({extended:false}));

app.get("/add",(request,response)=>{
    fs.readFile("./html/addform.html","utf-8",(err,data)=>{
        response.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
        response.end(ejs.render(data));
    })      
});

app.get("/cal",(request,response)=>{
    let x = parseInt(request.query.x); //input태그의 name속성
    let y = parseInt(request.query.y);
    response.send(`${x} 더하기 ${y} 는 ${x + y}`);
});

app.listen(4000,()=>{
    console.log("server start http://127.0.0.1:4000")
})