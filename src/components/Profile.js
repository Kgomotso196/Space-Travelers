import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './profile.css'
import { leaveMission } from '../redux/missions/missionsSlice';
import { reserveRocket } from '../redux/rockets/rocketsSlice';

const Profile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const filteredMissions = missions.filter((mission) => mission.joined === true);
  const rockets = useSelector((state) => state.rockets.rockets);
  const filteredRockets = rockets.filter((rocket) => rocket.reserved === true);
  const dispatch = useDispatch();

  const handleClick = (e, { id }) => {
    e.preventDefault();
    dispatch(leaveMission({ id }));
  };

  const handleRocketClick = (e, { id }) => {
    e.preventDefault();
    console.log(id);
    dispatch(reserveRocket(id));
  };

  let rocket;
  let mission;

  if (filteredMissions.length === 0) {
    mission = (
      <div className='list'>
        <h2>My Missions</h2>
        <ul id="missions">
          <li>You have not joined any missions yet</li>
        </ul>
      </div>
    );
  } else {
    mission = (
      <div className='list'>
        <h2>My Missions</h2>
        <ul id="missions">
          {filteredMissions.map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}<button onClick={(e) => { handleClick(e, { id: mission.mission_id }); }}>Leave</button></li>
          ))}
        </ul>
      </div>
    );
  };

  if (filteredRockets.length === 0) {
    rocket = (
      <div className='list'>
        <h2>My Rockets</h2>
        <ul id="rockets">
          <li>You have not reserved any rockets yet</li>
        </ul>
      </div>
    );
  } else {
    rocket = (
      <div className='list'>
        <h2>My Rockets</h2>
        <ul id="rockets">
          {filteredRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.name}<button onClick={(e) => { handleRocketClick(e, { id: rocket.id }); }}>Cancel</button></li>
          ))}
        </ul>
      </div>
    )
  };

  return (
    <>
      <div id="profile-container">{mission}{rocket}</div>
    </>
  );

};

export default Profile;
