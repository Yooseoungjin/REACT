/* Fortest1_1 */
import react,{useState} from "react";

function Fortest2(props){
    const [fruitList,setFruitList] = useState(["사과","배","체리","수박"]);
    const [fruit,setFruit]=useState("");

    //input태그에서 값 입력하면 fruit변수에 값을 저장한다.
    const onChange = (e)=>{
        setFruit(e.target.value);
    }

    //추가버튼을 누르면, fruit변수의 값을 fruitList에 추가한다.
    const goAppend=()=>{
        //배열의 push함수 사용 못함, 원래 배열에 데이터 추가
        //배열 자체를 새로 만들어 바꿔칠기를 해야 한다.
        //push - 원래 배열메모리에 추가
        //concat - 새로운 배열을 만들어서 기존배열 내용복사하고 하나에 추가

        setFruitList(fruitList.concat(fruit));
        setFruit(""); //input태크 공백 채우기
    }

    const goSelect = (index)=>{
        alert(fruitList[index]);
    }

    return(
        <div>
            <input type="text" onChange={onChange} value={fruit}/>
            <button type="button" onClick={goAppend}>추가하기</button>
            <ul>
            {
                fruitList.map( (item,index)=>{
                    return(
                        <li key={index}>
                            <a href="#none" onClick={()=>{goSelect(index)}}>{item}</a>
                        </li>
                    );
                })
            }
            </ul>
        </div>
    )
}

export default Fortest2