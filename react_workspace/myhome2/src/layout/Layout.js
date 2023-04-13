import 'bootstrap/dist/css/bootstrap.min.css' //부트스트랩 라이브러리
import {Outlet, Link, NavLink} from "react-router-dom";

function Layout(props){
    return (
            /* 앵커태그 말고 네브링크를 사용하고 앵커태크는 페이지 전체가 새로고침되니까 */
        
        <div>
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/board/list">영웅게시판</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/score/list">학점게시판</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                    </ul>
                </div>
            </nav>
            <div style={{marginTop:"10px"}}/>
            <Outlet /> {/* Outlet은 각 컴포넌트의 내용이 뿌려질 위치를 정하는것 */}
        </div>
    )
}

export default Layout;