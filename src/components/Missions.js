import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="container-missions">
        <div className="title-missions">
          <Title headline="Missões" />
        </div>
        <div className="missions-cards">
          {missions.map(({ name, year, country, destination }, index) => (
            <MissionCard
              key={ index }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
