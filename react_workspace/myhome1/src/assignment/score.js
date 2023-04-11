
import React ,{useState} from "react";


function Score(){
    const [name, setName] = React.useState("");
    const [x, setX]=React.useState(0);
    const [y, setY]=React.useState(0);
    const [z, setZ]=React.useState(0);
    const [a, setA]=React.useState(0);
    const [b, setB]=React.useState(0);

    function nameChange (e) {
        setName(e.target.value);
    }
    
    function xChange (e) {
        setX(e.target.value);
    }

    function yChange (e) {
        setY(e.target.value);
    }

    function zChange (e) {
        setZ(e.target.value);
    }

    const cal = ()=>{
        setA(parseInt(x) + parseInt(y)+ parseInt(z))
        setB((parseInt(x) + parseInt(y)+ parseInt(z))/3)
    }
   
    return(
        <div>
            <div>
                <h1>성적관리 프로그램을 만들자</h1>
                성명 : <input type="text" onChange={nameChange}/> <br/>
                국어 : <input type="text" onChange={xChange}/> <br/>
                영어 : <input type="text" onChange={yChange}/> <br/>
                수학 : <input type="text" onChange={zChange}/> <br/>
            </div><br/>
            <button type="button" onClick={cal}>결과확인</button>
            <h3>{name}의 총점은 {a}이고 평균은 {b}입니다.</h3>           
        </div>
    )
}


export default Score;