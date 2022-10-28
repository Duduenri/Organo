import { useState } from 'react';
import Banner from './components/Banner/Banner'
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Form aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Team name="Programação"/>
      <Team name="Front-End"/>
      <Team name="Data Science"/>
    </div>
  );
}

export default App;
