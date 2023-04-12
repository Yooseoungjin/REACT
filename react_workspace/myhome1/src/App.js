/* import logo from './logo.svg'; */
import './App.css';
/* import HelloComponent from './component/HelloComponent';
import Fifth_clone_coding from './assignment/fifth_clone_coding';
import Score from './assignment/score'; */
/* import Iftest1 from './component/Iftest1';
import Fortest2 from './component/Fortest2'; */
/* import Hero from './component/Hero'; */
/* import Gugudan from './component/Gugudan'; */
import HeroList from './component/HeroList';
import HeroWrite from './component/HeroWrite';

function App() {
  return (
    <div className="App">
     <h1 className='title'>리액트 초고수</h1>
     {/* <HelloComponent/><br/>
     <Fifth_clone_coding/><br/>
     <Score/> */}
{/*      <Iftest1/>
     <Fortest2/> */}
     {/* <Hero/> */}
     {/* <Gugudan/> */}
     <div><HeroWrite/></div>
     <div><HeroList/></div>
    </div>
  );
}

export default App;
