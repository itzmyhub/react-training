import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  var nome = "Zorro"

  return (
    <div className="App">
      <h1>IHH DOIDAO</h1>
      <Frase/>
      <SayMyName nome="Jack"/>
      <SayMyName nome="Ítalo"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Jão" idade="33" profissao="Dev" foto="https://via.placeholder.com/150"/>
      <List/>
    </div>
  );
}

export default App;
