var express = require("express")
var app = express(); //서버 만들었음
let fs = require("fs");
let ejs = require("ejs");

var app = express(); //html연결.js

app.use(express.urlencoded({extended:false}));

app.get("/guguform",(request,response)=>{
    fs.readFile("./html/guguform.html","utf-8",(err,data)=>{
        response.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
        response.end(ejs.render(data));
    })      
});

app.get("/gugu",(request,response)=>{ 
    let dan = request.query.dan;
    let result="";
    
    for(i=1; i<=9; i++)
    {
        result +=`<p style="color:red;font-size:14pt">${dan}*${i} = ${dan*i}</p>`;
    }
    response.send(result);
});

app.use((request,response)=>{
    response.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    response.send("<h1>기본페이지입니다</h1>");
})

app.listen(4000,()=>{
    console.log("server start http://127.0.0.1:4000")
})