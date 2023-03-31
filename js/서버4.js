let http = require("http");
let fs = require("fs");  //파일읽기
let url = require("url"); //url분석을 위한 라이브러리

//http:127.0.0.1:5000/add?x=4&y=5
//http:127.0.0.1:5000/sub?x=4&y=5
//http:127.0.0.1:5000/userinfo?userid=test&username=Tom

let server = http.createServer((request,response)=>{
    // console.log(request);
    // console.log(request.url); //전송url
    console.log(request.method); //전송방식 :GET

    let rurl = request.url;
    let pathname = url.parse(rurl,true).pathname; //add
    let query = url.parse(rurl,true).query; //{X:4,Y:5}
    //string 분석 -> json객체로 전환
    //파싱한다
    console.log(query);
    console.log(pathname);
    console.log(typeof(query));
    
    if(pathname=="/add")
    {
        response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'}); //캐릭터셋 utf-8을 하면 한글이 가능합니다.
        let x = parseInt(query.x);
        let y = parseInt(query.y);
        let z= x+y;
        response.end(`더하기 입니다.? ${x} + ${y} = ${z}`);
    }
    if(pathname=="/sub")
    {
        response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'}); //캐릭터셋 utf-8을 하면 한글이 가능합니다.
        let x = parseInt(query.x);
        let y = parseInt(query.y);
        let z= x+y;
        response.end(`빼기 입니다.? ${x} - ${y} = ${z}`);
    }
    if(pathname=="/userinfo")
    {
        response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'}); //캐릭터셋 utf-8을 하면 한글이 가능합니다.
        response.end(`ID는 ${query.userid}이고 고객명은${query.username}입니다.`);
    }
    else{
        response.writeHead(404,{'Content-Type':'text/html;charset=utf-8'}); 
        response.end("<h1>존재하지않는 url입니다.</h1>");
    }
});

server.listen(5000,()=>{
    console.log("server start http://127.0.0.1:5000")
})