import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, reserveRocket } from '../redux/rockets/rocketsSlice';
import RocketList from '../components/RocketList';

function Rockets() {
  const dispatch = useDispatch();
  const { rockets, loading } = useSelector((store) => store.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets]);

  const clickHandler = (e) => {
    dispatch(reserveRocket(e.target.id));
  };

  if (loading === 'loading') {
    return (
      <h1 style={{ marginLeft: '40px' }}>Loading...</h1>
    );
  }

  return (
    <>
      {rockets.map((item) => (
        <RocketList
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          flickrImages={item.image}
          reserved={item.reserved}
          onClick={clickHandler}
        />
      ))}
    </>
  );
}

export default Rockets;