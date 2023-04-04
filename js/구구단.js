var express = require("express")
var app = express(); //서버 만들었음
var ejs = require("ejs");
var fs = require("fs");

app.set("view engine",ejs); //set은 내부변수에 값을 설정한다.
//미들웨어를 사용한다.
app.use(express.urlencoded({extended:false}));

// http://127.0.0.1:4000/gugu?dan=4
app.get("/gugu",(request,response)=>{ 
        let dan = request.query.dan;
        let result="";
        for(i=1; i<=9; i++)
        {
            result +=`${dan}*${i} = ${dan*i}<br/>`;
        }
        console.log(result);
        response.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
        response.end(result);
        /* response.end("hi"); //이미 end가 되었기 때문에 에러발생함 */
});

// http://127.0.0.1:4000/gugu/4
app.get("/gugu/:dan",(request,response)=>{ 
        let dan = request.params.dan; //url에 따라서 :dan
        let result="";
        for(i=1; i<=9; i++)
        {
            result +=`${dan}*${i} = ${dan*i}<br/>`;
        }
        console.log(result);
        response.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
        response.end(result);
        /* response.end("hi"); //이미 end가 되었기 때문에 에러발생함 */
});

app.listen(4000,()=>{
    console.log("server start http://127.0.0.1:4000")
})
