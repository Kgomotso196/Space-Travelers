import React from 'react';
import Mission from './Mission';
import './mission.css'

const missions = [
  {
    mission_name: 'Thaicom',
    description: 'Thaicom 6 is a communications satellite operated by Thaicom. It was built by Orbital Sciences Corporation and is based on the GEOStar-2 platform',
    status: 'Active',
  },
  {
    mission_name: 'Thaicom1',
    description: 'Thaicom 6 is a communications satellite operated by Thaicom. It was built by Orbital Sciences Corporation and is based on the GEOStar-2 platform',
    status: 'Inactive',
  },
  {
    mission_name: 'Thaicom2',
    description: 'Thaicom 6 is a communications satellite operated by Thaicom. It was built by Orbital Sciences Corporation and is based on the GEOStar-2 platform',
    status: 'Active',
  },
];

const MissionList = () => (
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
          <Mission key={mission.mission_name} mission_name={mission.mission_name} description={mission.description} status={mission.status} />
        ))};
      </tbody>
    </table>
  </div>
);

export default MissionList;
