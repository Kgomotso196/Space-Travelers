import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from './Mission';
import { fetchMissions } from '../redux/missions/missionsSlice';
import './mission.css'

const MissionList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    if (missions.length > 0) return;
    dispatch(fetchMissions());
  }, []);

  return (
    <div>
      <h1>Missions</h1>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th id="description">Description</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission key={mission.mission_id} mission_id={mission.mission_id} mission_name={mission.mission_name} description={mission.description} joined={mission.joined} />
          ))};
        </tbody>
      </table>
    </div>
  )
}

export default MissionList;
