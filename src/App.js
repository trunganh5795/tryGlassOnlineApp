import logo from './logo.svg';
import './App.css';
import QLSP from './components/QLSP'
import Background from './components/Background'

function App() {
  return (
    <div className="App" >
      <img src="./img/background.jpg" className="backGround"/>
      <Background/>
        <div className="container">
          <QLSP />
        </div>

    </div>
  );
}

export default App;
