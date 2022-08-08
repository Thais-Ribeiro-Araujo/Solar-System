import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const planetAlt = `Planeta ${planetName}`;
    return (
      <div className="planet-card" data-testid="planet-card">
        <p className="planet-name" data-testid="planet-name">{planetName}</p>
        <img className="planet-image" src={ planetImage } alt={ planetAlt } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
