import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({mission_name, description, status}) => (
  <tr>
    <td>{mission_name}</td>
    <td>{description}</td>
    <td>{status}</td>
    <td><button type="button">Join</button></td>
  </tr>
);

Mission.propTypes = {
  mission_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Mission;
