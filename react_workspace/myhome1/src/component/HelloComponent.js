import React ,{Component, useState} from "react"; //useState 삭제가능

class HelloComponent extends Component{
    sayHello()
    {
        alert("***");
    }
    render(){
        return(
            <div>
                <h1>경고창을 호출하자</h1>
                <button type="button" onClick={this.sayHello}>눌러보세요</button>
            </div>
        )    
    }
}

export default HelloComponent;