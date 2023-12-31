import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';

const Mission = ({mission_id, mission_name, description, joined}) => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const handleClick = (e, { id, joined }) => {
    e.preventDefault();
    if (!joined) {
      dispatch(joinMission({ id }));
    } else {
      dispatch(leaveMission({ id }));
    }
  };

  return (
    <tr>
      <td><b>{mission_name}</b></td>
      <td>{description}</td>
      <td><p className={joined ? 'status member':'status'}>{joined ? 'Active Member':'NOT A MEMBER'}</p></td>
      <td>
        <button
        type="button"
        onClick={(e) => {
          handleClick(e, { id: mission_id, joined: joined });
        }}
        className={joined ? 'joined':''}
        >
          {joined ? 'Leave Mission':'Join Mission'}
        </button>
      </td>
    </tr>
  )
};

Mission.propTypes = {
  mission_id: PropTypes.string.isRequired,
  mission_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
};

export default Mission;
