import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="solar-system" data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((index) => (
          <PlanetCard
            key={ index }
            planetName={ index.name }
            planetImage={ index.image }
          />))}
      </div>
    );
  }
}

export default SolarSystem;
