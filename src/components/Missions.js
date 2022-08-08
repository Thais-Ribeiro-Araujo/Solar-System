import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div className="missions" data-testid="missions">
        <Title headline="Missões" />
        {missions.map((index) => (
          <MissionCard
            key={ index }
            name={ index.name }
            year={ index.year }
            country={ index.country }
            destination={ index.destination }
          />))}
      </div>
    );
  }
}

export default Missions;
