// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import BlueBox from './components/home_blue_sec';
import Three_Vertical from './components/three_vertical_div';
import Tree_Black_Box from './components/three_black_box';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BlueBox/>
      <Three_Vertical/>  
      <Tree_Black_Box/> 
    </div>
  );
}

export default App;
