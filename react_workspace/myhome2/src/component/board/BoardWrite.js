import 'bootstrap/dist/css/bootstrap.min.css' //부트스트랩 라이브러리
import React, { useState, useEffect } from 'react';
import axios from "axios";
import {SERVERIP} from '../../CommonUtil'
import {Link, useNavigate,useParams} from 'react-router-dom';

function BoardWrite(props){
    let {id} =  useParams(); //보내는 쪽에서 json객체로 보냄
    let history = useNavigate();

    const [heroName, setHeroName] = useState("");
    const [heroDesc, setHeroDesc] = useState("");

    useEffect(()=>{
        console.log("id",id);
        async function loadData(){
            let results = await axios.get(SERVERIP+"/hero/view/"+id)
            console.log(results.data.hero.hero_NAME); //테이블 칼럼명과 일치해야함
            console.log(results.data.hero.hero_desc); //테이블 칼럼명과 일치해야함

            setHeroName(results.data.hero.hero_NAME);
            setHeroDesc(results.data.hero.hero_desc);
        }
        if(id!=undefined) //write가 아니고 view를 호출할때
            loadData();
        /* window.onload
        BoardWrite 컴포넌트가 /board/write 일때는 undefined 가 오고
        /board/view/1 id에는 파라미터 갑싱 저장된다 */
    },[]);
    const nameChange=(e)=>{
        setHeroName(e.target.value);
    }

    const descChange=(e)=>{
        setHeroDesc(e.target.value);
    }


    //서버로 전송하기
    const postData=()=>{
        //데이터를 json으로 묶어서 보내야 한다.
        let data = {"hero_name":heroName,"hero_desc":heroDesc};
        axios.post(SERVERIP+"/hero/write",data)
        .then((res)=>{
            console.log(res.data)
            alert("등록이 되었다")
            history("/board/list"); //redirect에 대응=페이지 이동
        })
        .catch((error)=>{
            console.log( error );
        });
    }

    return(
        <div className='container'>
            <h1>게시판 글쓰기</h1>

            <table className="table table-hover " style={{marginTop: "30px"}}>
            <colgroup>
                <col width="25%" />
                <col width="*" />
            </colgroup>
        
            <tbody>
              <tr>
                <td>영웅이름</td>
                <td>
                    <div className="mb-3" style={{marginTop: "13px"}}>
                        <input type="text" className="form-control" id="title" name="title" 
                        value={heroName}
                        placeholder="영웅을 입력하세요" onChange={nameChange} />
                    </div>
                </td>
              </tr>       
              <tr>
                <td>업적</td>
                <td>
                    <div className="mb-3" style={{marginTop: "13px"}}>
                        <input type="text" className="form-control" id="writer" name="writer" 
                        value={heroDesc}
                        placeholder="업적을 입력하세요" onChange={descChange}/>
                    </div>
                </td>
              </tr>      
       
            </tbody>
          </table>
       
          <div className="container mt-3" style={{textAlign:"right"}}>
            <Link className="btn btn-secondary" onClick={postData}>등록</Link>
            <Link className="btn btn-third">취소</Link>       
          </div>

        </div>
    )
}

export default BoardWrite;