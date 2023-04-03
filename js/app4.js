var express = require("express")
var app = express(); //서버 만들었음
var ejs = require("ejs");
var fs = require("fs");

app.set("view engine",ejs); //set은 내부변수에 값을 설정한다.
//미들웨어를 사용한다.
app.use(express.urlencoded({extended:false}));

app.get("/",(request,response)=>{
    fs.readFile("html/index.html","utf-8",(error,data)=>{
        response.send(data.toString()); //투스트링은 에러를 사전에 방지하기위함. 안해도 에러가 안 나올때가 있다.
    });
});

// http://127.0.0.1:4000/gugu?dan=4
app.get("/gugu",(req,res)=>{ 
        let dan = parseInt(req.query.dan);
        /* let y = parseInt(req.query.y); */
    res.send(dan); 
});

app.use((request,response)=>{
    response.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    response.end("<H1>기본 페이지</H1>");
});

app.listen(4000,()=>{
    console.log("server start http://127.0.0.1:4000")
})
