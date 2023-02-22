import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="container-planets">
        <div className="title-planets">
          <Title headline="Planetas" />
        </div>
        <div className="planet-cards">
          { planets.map(({ name, image }, index) => (
            <PlanetCard key={ index } planetName={ name } planetImage={ image } />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
