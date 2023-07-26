import React from 'react';
import PropTypes from 'prop-types';

function RocketList({
  id, name, description, flickrImages, onClick, reserved,
}) {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-3"><img src={flickrImages} className="img-thumbnail" alt="rocketThumb" /></div>
        <div className="col-9">
          <h4>{name}</h4>
          <p>
            {reserved ? <span className="bg-success text-white rounded px-1">Reserved</span> : ''}
            {description}
          </p>
          {onClick
            ? <button type="button" className={reserved ? 'btn btn-white border border-dark' : 'btn btn-primary'} id={id} onClick={(e) => onClick(e)}>{reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
            : ''}
        </div>
      </div>
    </div>
  );
}

RocketList.defaultProps = {
  id: '',
  name: '',
  description: '',
  flickrImages: '',
  onClick: '',
  reserved: '',
};
RocketList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  flickrImages: PropTypes.string,
  onClick: PropTypes.func,
  reserved: PropTypes.bool,
};

export default RocketList;