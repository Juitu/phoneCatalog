import React from 'react';
import { Link } from 'react-router-dom';
import { useCatalog } from '../catalogContext';

import ButtonContainer from './Button';

const Details = () => {
  const { selectedPhone, handleDetail } = useCatalog();
  const {
    id,
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    processor,
    ram,
  } = selectedPhone;
  return (
    <div className="container py-5">
      {/* title */}
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{name}</h1>
        </div>
      </div>
      {/* end of title */}
      {/* product info */}
      <div className="row">
        {/* product image */}
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <img src={imageFileName} className="img-fluid border" alt="product" />
        </div>
        {/* product text */}
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h2>model: {name}</h2>
          <h4 className="text-title text-uppercase text-muted mb-2">
            made by: <span className="text-uppercase">{manufacturer}</span>
          </h4>
          <h4 className="lead mb-1">
            color: <span>{color}</span>
          </h4>
          <h4 className="text-gray">
            <strong>
              price: {price} <span> €</span>
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            screen: <span>{screen}</span>
          </p>
          <p className="text-capitalize font-weight-bold mt-0 mb-0">
            processor: <span>{processor}</span>
          </p>
          <p className="text-capitalize font-weight-bold mt-0 mb-0">
            RAM: <span>{ram} GB</span>
          </p>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">some info about product:</p>
          <p className="text-muted lead">{description}</p>
          {/* buttons */}
          <div>
            <Link to="/">
              <ButtonContainer>back to catalogue</ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
