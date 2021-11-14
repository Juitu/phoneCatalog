import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

const useCatalog = () => {
  return useContext(ProductContext);
};

const ProductProvider = ({ children }) => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhone, setSelectedPhone] = useState({});

  useEffect(async () => {
    const fetchProducts = async () => {
      setLoading(true);
      let tempProducts = [];
      let phonesList = [];
      try {
        const response = await fetch('http://localhost:3001/ms/phonecatalog');
        phonesList = await response.json();
      } catch (e) {
        console.error(e);
      }
      phonesList.forEach((item) => {
        const singleItem = { ...item };
        tempProducts = [...tempProducts, singleItem];
      });
      setPhones(tempProducts);

      /** ******************************************************************************.
       *                                                                              *
       *  Next setTimeout is added to show loading spinner, but it could be removed   *
       *                                                                              *
       ******************************************************************************* */

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    await fetchProducts();
  }, []);

  const getItem = (id) => {
    const product = phones.find((item) => item.id === id);
    return product;
  };

  const handleDetail = (id) => {
    const product = getItem(id);
    setSelectedPhone(product);
  };

  return (
    <ProductContext.Provider value={{ phones, handleDetail, selectedPhone, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext, useCatalog };
