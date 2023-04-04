var express = require("express")
var app = express(); //서버 만들었음
var fs = require("fs");
var ejs = require("ejs");

//ejs엔진은 views 폴더 아래서 파일을 검색한다.
app.set("view engine",ejs)
app.use(express.urlencoded({extended:false}));

let boardList = [
    {id:1, title:"졸려요",writer:"가가",wdate:"2023-04-04"},
    {id:2, title:"계속자라",writer:"나나",wdate:"2023-04-05"},
    {id:3, title:"졸리면",writer:"다다",wdate:"2023-04-06"},
    {id:4, title:"자야지",writer:"라라",wdate:"2023-04-07"},
    {id:5, title:"잡에가 그냥",writer:"하하",wdate:"2023-04-08"},
    {id:6, title:"가서 자",writer:"크크",wdate:"2023-04-09"}   
]
app.use("/board/list",(request,response)=>{
    response.render("board/board_list.ejs",{boardList:boardList});
});

app.use("/board/view/:id",(request,response)=>{
    let id = request.params.id;
    let item = boardList.filter(x=>x.id==id);
    response.render("board/board_view.ejs",{item:item[0]});
});

//페이지만 이동한다. board_write.ejs로 이동만 한다.
app.use("/board/write",(request,response)=>{
    response.render("board/board_write.ejs");
});

//저장하기
app.use("/board/save",(request,response)=>{
    let title = request.body.title;
    let content = request.body.content;
    let writer = request.body.writer;
    let id = boardList.length+1;
    boardList.push({id:id,title:title,content:content,writer:writer});
    response.redirect("/board/list"); //강제이동
});

app.use((request,response)=>{
    response.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    response.end("<H1>기본 페이지</H1>");
});

app.listen(4000,()=>{
    console.log("server start http://127.0.0.1:4000")
})