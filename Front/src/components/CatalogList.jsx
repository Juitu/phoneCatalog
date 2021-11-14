import React, { useContext } from 'react';
import { useCatalog } from '../catalogContext';
import Item from './Item';
import Title from './Title';
import LoadingSpinner from './Spinner';

const CatalogList = () => {
  const { phones, handleDetail, loading } = useCatalog();

  return loading ? (
    <div className="loading py-5">
      <LoadingSpinner />
    </div>
  ) : (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="Our" title="phones" />
          <div className="row">
            {phones.map((phone) => {
              return <Item key={phone.id} product={phone} handleDetail={handleDetail} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogList;
