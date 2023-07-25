import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './profile.css'
import { leaveMission } from '../redux/missions/missionsSlice';

const Profile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const filteredMissions = missions.filter((mission) => mission.joined === true);
  const dispatch = useDispatch();

  const handleClick = (e, { id }) => {
    e.preventDefault();
    dispatch(leaveMission({ id }));
  };

  return (
    <div id="profile">
      <h2>My Missions</h2>
      <ul id="missions">
        {filteredMissions.map((mission) => (
          <li key={mission.mission_id}>{mission.mission_name}<button onClick={(e) => { handleClick(e, { id: mission.mission_id }); }}>Leave</button></li>
        ))}
      </ul>
    </div>
  );

};

export default Profile;
