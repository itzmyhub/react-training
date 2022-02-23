import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  var nome = "Zorro"

  return (
    <div className="App">
      <SayMyName nome="Jack"/>
      <SayMyName nome="Ítalo"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Jão" idade="33" profissao="Dev" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
