import Banner from './components/Banner/Banner'
import Textfield from './components/Textfield';

function App() {
  return (
    <div className="App">
      <Banner />
      <Textfield label="Nome"/>
      <Textfield label="Cargo"/>
      <Textfield label="Imagem"/>
    </div>
  );
}

export default App;
