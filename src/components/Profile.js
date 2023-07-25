import React from 'react';
import { useSelector } from 'react-redux';
import './mission.css'

const Profile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const filteredMissions = missions.filter((mission) => mission.joined === true);

  return (
    <div>
      <h1>My Missions</h1>
      <ul>
        {filteredMissions.map((mission) => (
          <li key={mission.mission_id}>{mission.mission_name}</li>
        ))}
      </ul>
    </div>
  );

};

export default Profile;
