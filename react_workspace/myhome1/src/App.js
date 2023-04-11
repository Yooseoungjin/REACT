import logo from './logo.svg';
import './App.css';
import HelloComponent from './component/HelloComponent';
import Fifth_clone_coding from './assignment/fifth_clone_coding';
import Score from './assignment/score';

function App() {
  return (
    <div className="App">
     <h1 className='title'>리액트 고수</h1>
     <HelloComponent/><br/>
     <Fifth_clone_coding/><br/>
     <Score/>
    </div>
  );
}

export default App;
