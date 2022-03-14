import './App.css';
import {useState} from 'react'

import SeuNome from './components/SeuNome';
import TestandoSL from './components/TestandoSL'
import Saudacao from './components/Saudacao';

function App() {
  const [nome, setNome] = useState()
  const [secondNome, setSecondNome] = useState()

  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
      <TestandoSL setNome={setSecondNome} />
      {secondNome}
    </div>
  );
}

export default App;
