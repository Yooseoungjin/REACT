var express = require("express")
var app = express(); //서버 만들었음
let fs = require("fs");
let ejs = require("ejs");

var app = express(); //html연결.js

//bodyParse -- npm install bodyParser를 하고 해야한다.
//새버젼에서는 express가 갖고 있다.
//post로 전송할때 request.body에 보낸 정보를 추가해서
//사용이 간편핟록 도와주는 미들웨어이다.

app.use(express.urlencoded({extended:false}));

app.get("/calcform",(request,response)=>{
    fs.readFile("./html/calcform.html","utf-8",(err,data)=>{
        response.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
        response.end(ejs.render(data));
    })      
});
app.get("/calc",(request,response)=>{
    let x = parseInt(request.query.x); //input태그의 name속성
    let y = parseInt(request.query.y);
    let operator = parseInt(request.query.operator);
    
    if(operator=="1")
    response.send(`${x} + ${y} = ${x + y}`);
    
    else if(operator=="2")
    response.send(`${x} - ${y} = ${x - y}`);
    else if(operator=="3")
    response.send(`${x} * ${y} = ${x * y}`);
    else if(operator=="4")
    response.send(`${x} / ${y} = ${x / y}`);
});

app.listen(4000,()=>{
    console.log("server start http://127.0.0.1:4000")
})