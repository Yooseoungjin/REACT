var express = require("express")
var app = express(); //서버 만들었음
let fs = require("fs");
let ejs = require("ejs");

var app = express(); //html연결.js

app.use(express.urlencoded({extended:false}));

app.get("/score",(request,response)=>{
    fs.readFile("./html/third.html","utf-8",(err,data)=>{
        response.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
        response.end(ejs.render(data));
    })      
});

app.get("/cal",(request,response)=>{
    let name = request.query.name;
    let kor = parseInt(request.query.kor);
    let eng = parseInt(request.query.eng);
    let mat = parseInt(request.query.mat);
    response.send(`${name}의 총점은 ${kor+eng+mat} 이고 평균은 ${(kor+eng+mat)/3}입니다.`);
});

app.listen(4000,()=>{
    console.log("server start http://127.0.0.1:4000")
})