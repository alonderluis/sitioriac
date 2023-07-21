import logo from './logo.svg';
import './App.css';
import C01componentes from './componentes/C01componentes';
import C02contador from './componentes/C02contador';
import C03dobleestado from './componentes/C03dobleestado';
import C04variable from './componentes/C04variable';
import C05operador from './componentes/C05operador';
import C06matriz from './componentes/C06matriz';

function App() {
  return (
    <div >
      <h1>componentes 1</h1>
      <C01componentes></C01componentes>

      <h1>componente 2</h1>
      <C02contador></C02contador>
   

      <h1>componente 3</h1>
      <C03dobleestado></C03dobleestado>

      <h1>componente 4</h1>
      <C04variable></C04variable>

      <h1>componente 5</h1>
      <C05operador></C05operador>

      <h1>componente 6</h1>
      <C06matriz></C06matriz>



    </div>
  );
}

export default App;

