import './style/App.css';
import { useState } from 'react';
import Header from './components/Header';
import Planet from './components/Planet';
import planetsData from './planets-data.json';

function App() {
  const [planet, setPlanet] = useState('Mercury');

  function choosePlanet(e) {
    setPlanet(e.currentTarget.id);
  }

  function findPlanet() {
    return planetsData.filter(planetItem => planetItem.name === planet);
  }

  return (
    <div>
      <Header planetsData={planetsData} choosePlanet={choosePlanet} />
      <Planet planet={findPlanet()} />
    </div>
  );
}

export default App;
