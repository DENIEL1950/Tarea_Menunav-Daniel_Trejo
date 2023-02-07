import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navegacion from './componenst/Navegacion';
import Inicio from './componenst/inicio';
import Saludos from './componenst/Saludos';
import Mision from './componenst/Saludos';
import Vicion from './componenst/Saludos';

function App() {
  return (
    <div className="App">
      <Navegacion />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/saludos' element={<Saludos />} />
        <Route path='/mision' element={<Mision />} />
        <Route path='/vision-pucese' element={<Vicion />} />

      </Routes>
    </div>
  );
}

export default App;
