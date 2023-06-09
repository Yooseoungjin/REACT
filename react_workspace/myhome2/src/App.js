import './App.css';
import {Routes, Route} from 'react-router-dom'

import Layout from './layout/Layout.js';
import Home from './component/Home.js';
import BoardList from './component/board/BoardList.js';
import BoardWrite from './component/board/BoardWrite.js';
/* import BoardView from './component/board/BoardView.js'; */
import ScoreListFront from './component/score/ScoreListFront.js';
import HeroList from './component/hero/HeroList.js';
import HeroWrite from './component/hero/HeroWrite.js';


function App() {
  return (
    <div className="App">
      <h1 className='title'>리액트 초고수</h1>
       <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/board/list" element={<BoardList/>}/>
            <Route path="/board/write" element={<BoardWrite/>}/>
            <Route path="/board/view/:id" element={<BoardWrite/>}/>
            <Route path="/score/list" element={<ScoreListFront/>}/>

            <Route path="/hero/list" element={<HeroList/>}/>
            <Route path="/hero/write" element={<HeroWrite/>}/>
            <Route path="/hero/view/:id" element={<HeroWrite/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
