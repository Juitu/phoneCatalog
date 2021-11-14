import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ name, title }) => {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1 className="text-capitalize font-weight-bold">
          {name} <strong className="text-gray">{title}</strong>
        </h1>
      </div>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
};

Title.defaultProps = {
  title: '',
  name: '',
};

export default Title;
