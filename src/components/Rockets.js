import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import RocketList from './RocketList';

function Rockets() {
  const dispatch = useDispatch();
  const rocketsData = useSelector((state) => state.rockets.rockets);
  const rocketsStatus = useSelector((state) => state.rockets.status);
  const rocketsError = useSelector((state) => state.rockets.error);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  if (rocketsStatus === 'loading') {
    return (
      <h1 style={{ marginLeft: '40px' }}>Loading...</h1>
    );
  }

  if (rocketsError !== null) {
    return (
      <h1 style={{ marginLeft: '40px' }}>{rocketsError}</h1>
    );
  }
  return (
    <>
      {rocketsData.map((item) => (
        <RocketList
          key={item.id}
          id={item.id}
          name={item.rocket_name}
          description={item.description}
          flickrImages={item.flickr_images[0]}
        />
      ))}
    </>
  );
}

export default Rockets;