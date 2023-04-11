
import React ,{useState} from "react";


function Fifth_clone_coding(){
    const [x, setX]=React.useState(0);
    const [y, setY]=React.useState(0);
    const [z, setZ]=React.useState(0);

    function xChange (e) {
        setX(e.target.value);
    }

    function yChange (e) {
        setY(e.target.value);
    }

    const add = ()=>{
        setZ(parseInt(x) + parseInt(y))
    }

    const sub = ()=>{
        setZ(parseInt(x) - parseInt(y))
    }

    return(
        <div>
            <h1>더하기 빼기를 만들어보자</h1>
            x : <input type="text" onChange={xChange}/> <br/>
            y : <input type="text" onChange={yChange}/> <br/>
            <h1>{z}</h1>
            <button type="button" onClick={add}>+</button>
            <button type="button" onClick={sub}>-</button>
        </div>
    )
}


export default Fifth_clone_coding;