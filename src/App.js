import logo from './logo.svg';
import './App.css';
import C01componentes from './componentes/C01componentes';
import C02contador from './componentes/C02contador';
import P2estado from './componentes/P2estado';
import p3dobleestado from './componentes/p3dobleestado';
import P4variable from './componentes/P4variable';

function App() {
  return (
    <div >
      <h1>componentes 1</h1>
      <C01componentes></C01componentes>

      <h1>componente 2</h1>
      <C02contador></C02contador>
   

      <h1>componente 3</h1>
      <P4variable></P4variable>
    </div>
  );
}

export default App;


