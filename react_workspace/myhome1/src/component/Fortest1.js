/* Fortest1 */
import react,{useState} from "react";

function Fortest1(props){
    const [fruitList] = useState(["사과","배","체리","수박"]);

    const goSelect = (index)=>{
        alert(fruitList[index]);
    }

    return(
        <div>
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

export default Fortest1