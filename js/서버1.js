let http = require("http");

http.createServer(
    (request,response)=>{
        //브라우저 http://127.0.0.1:3000 서버로 엑세르 요청이 들어오면
        // request 객체 - 브라우저에서 요청한 정보를 담아오는 객체
        // response 객체 - 서버에서 클라이언트로 정보를 보낼때 여기에 
        // 담아 보낸다.
        // 
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    response.end("<H1>Hello my frist Webserver</H1>")

// 아래 리슨이라는 함수는 핸드폰을 사고 나서 [개통]의 의미이다 위에 크리에잇 서버가 핸드폰 구매, 그리고 리슨함스로 사용할수있게 개통함
}).listen(3000,()=>{
    console.log("server start http://127.0.0.1.3000")
})

// npm install nodemon