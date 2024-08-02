import { useState } from 'react';
import { Subtitulo } from './Subtitulo';
import './App.css';

function App() {
  const [numeroAleatorio, alterarNumeroAleatorio] = useState(Math.random());
  const numero = 27;
  const segundoNumero = numero / 3;

  // function trocarNumeroAleatorio() {
  //   numeroAleatorio = Math.random();
  // }
  function trocarNumeroAleatorio() {
    alterarNumeroAleatorio(Math.random());
  }
  return (
    <div>
      <h1>Meu primeiro título com React {numeroAleatorio}</h1>
      <Subtitulo autor={'Renan Araújo'} idade={28} altura={'190cm'} />
      <button onClick={trocarNumeroAleatorio}>Novo número aleatório</button>
    </div>
  );
}
export default App;
