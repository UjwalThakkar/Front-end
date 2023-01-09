import logo from './logo.svg';
import './App.css';
import Main from './components/Main.js';
import Nav from "./components/Nav.js";



function App() {
  return (
    <div className='sec1'>
      <Nav 
        logo="../assets/image33-removebg-preview.png"
      />
      <Main 
        img="../assets/nike_air_max.png"
      />
    </div>
  );
}

export default App;
