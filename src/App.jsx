import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './components/PersonajesInicio';
import Personaje from './components/Personaje'

function App() {
  return (
    <div className="contenedor">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/Personaje/:id" element={<Personaje />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
