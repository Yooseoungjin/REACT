let http = require("http");
const { URLSearchParams } = require("url");

let server = http.createServer((request,response)=>{

    if(request.method=="POST")
    {
    //body에서 오는 정보 수신하기
    let body ="";
    //request의 on "data"
    request.on("data",(data)=>{
        body +=data;
        //body로 타고오는  데이터를 계속 받는다
    });
    //데이터 수신이 종료하면 
    request.on("end",()=>{
        //body변수에 그동안 수신한 데이터가 있다.
        let postData = new URLSearchParams(body);

        let name = postData.get("name");
        let age = postData.get("age");

        let temp = `<h1>여기까지 오셨군요!</h1>
        <h3>${name} ${age}</h3>`;

        response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        response.end(temp);
    });
}
    else
    {
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    response.end("<H1>GET방식으로 접속 되었어요.</H1>")
    }
});
server.listen(4000,()=>{
    console.log("server start http://127.0.0.1.4000")
})