var express = require("express")
var app = express(); //서버 만들었음

// http://127.0.0.1:4000/add?x=45&y=7
app.get("/add",(req,res)=>{ 
    let result={x:parseInt(req.query.x),
                y:parseInt(req.query.y),
                sum:parseInt(req.query.x)+parseInt(req.query.y)}; 
    res.send(result); 
});

// http://127.0.0.1:4000/add2/45/7
app.get("/add2/:x2/:y2",(req,res)=>{ 
    let result={x:parseInt(req.params.x2),
                y:parseInt(req.params.y2),
                sum:parseInt(req.params.x2)+parseInt(req.params.y2)}; 
/*     res.send(result.sum.toString());  */
    res.send(result); 

});

app.use((request,response)=>{
    response.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    response.end("<H1>기본 페이지</H1>");
});

app.listen(4000,()=>{
    console.log("server start http://127.0.0.1:4000")
})