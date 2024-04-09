import React, {useState} from 'react';
import './App.css';


function App() {
  const [valor, setValor] = useState(0);
  function handleClick(){
    setValor(valor +1);
  }
  return (
    <div>
      <h1>App</h1>
      <p>O Valor é: {valor}</p>
      <button onClick={handleClick}>Adicionar 1</button>

    </div>
  );
}

export default App;