import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useCatalog } from '../catalogContext';

const Item = ({ product }) => {
  const { handleDetail } = useCatalog();
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
  } = product;
  return (
    <ProductObject className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div className="img-container p-5 h-100" onClick={() => handleDetail(id)}>
          <Link to="/details">
            <img src={imageFileName} alt="product" className="card-img-top" />
            <button
              className="info-btn"
              onClick={() => {
                handleDetail(id);
              }}
            >
              <p className="text-capitalize mb-0">+ Info</p>
            </button>
          </Link>
          {/* <button
            className="delete-btn"
            onClick={() => { handleDelete(id)
            }}
          >
            <p className="text-capitalize mt-0 mb-0">X</p>
          </button> */}
        </div>
        {/* card footer */}
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{name}</p>
          <h5 className="text-gray font-italic mb-0">
            {price}
            <span className=""> €</span>
          </h5>
        </div>
      </div>
    </ProductObject>
  );
};

const ProductObject = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .info-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightGray);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
  }

  .img-container:hover .info-btn {
    transform: translate(0, 0);
    transition: all 0.5s linear;
  }
  .info-btn:hover {
    color: var(--mainGray);
    cursor: pointer;
  }
  /*
  .delete-btn {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightGray);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0 0 0 0.5rem;
    transform: translate(100%, -100%);
  }

  .img-container:hover .delete-btn {
    transform: translate(0, 0);
    transition: all 0.5s linear;
  }
  .delete-btn:hover {
    color: var(--mainGray);
    cursor: pointer;
  }
  */
`;

Item.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    color: PropTypes.string,
    price: PropTypes.number,
    imageFileName: PropTypes.string,
  }).isRequired,
};

Item.defaultProps = {
  id: 0,
  name: '',
  color: '',
  price: 0,
  imageFileName: '',
};

export default Item;
