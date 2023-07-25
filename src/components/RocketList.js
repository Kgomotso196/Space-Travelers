import React from 'react';
import PropTypes from 'prop-types';

function RocketList({
  id, name, description, flickrImages,
}) {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-3"><img src={flickrImages} className="img-thumbnail" alt="rocketThumb" /></div>
        <div className="col-9">
          <h4>{name}</h4>
          <p>{description}</p>
          <button type="button" className="btn btn-primary" id={id}>Reserve rockets</button>
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
};
RocketList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  flickrImages: PropTypes.string,
};

export default RocketList;
