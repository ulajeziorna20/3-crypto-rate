import './App.css';
import Crypto from './components/Crypto'
import { useState } from "react";

function App() {

  const [color, setColor] = useState('blue')
  return (
    <div className="App">
      <header className="App-header">
        <Crypto color={color} setColor={setColor} />
      </header>
    </div>
  );
}

export default App;
