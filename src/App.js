import React from 'react';
import {
  Routes,
  Route,
  useParams
} from 'react-router-dom';

// Componente para la página de inicio
const Home = () => <h1>Bienvenida</h1>;

// Componente que muestra un número o indica que no es un número
const NumberOrWord = () => {
  const { value } = useParams();
  return isNaN(+value) ? <h1>this is word:  {value}</h1> : <h1>this is number: {value}</h1>;
};

// Componente que muestra una palabra con colores de texto y fondo personalizados
const ColoredWord = () => {
  const { word, textColor, bgColor } = useParams();
  return (
    <h1 style={{ color: textColor, backgroundColor: bgColor }}>this is word: {word}</h1>
  );
};

// Aplicación principal con enrutamiento configurado
const App = () => {
  return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:value" element={<NumberOrWord />} />
        <Route path="/:word/:textColor/:bgColor" element={<ColoredWord />} />
      </Routes>
  );
};

export default App;

