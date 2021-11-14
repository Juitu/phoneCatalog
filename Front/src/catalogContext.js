import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();
const ProductUpdateContext = createContext();

const initialPhones = [
  {
    id: 0,
    name: 'iPhone 7',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 769,
    imageFileName: 'iPhone_7.png',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2,
  },
  {
    id: 1,
    name: 'iPhone X',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'space gray',
    price: 979,
    imageFileName: 'iPhone_X.png',
    screen: '5,8 inch TrueTone Super Retina HD',
    processor: 'A11 Bionic',
    ram: 3,
  },
  {
    id: 2,
    name: 'iPhone 13 Pro',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'sierra blue',
    price: 1159,
    imageFileName: 'iPhone_13.png',
    screen: '6,1 inch OLED',
    processor: 'A15 Bionic',
    ram: 6,
  },
  {
    id: 3,
    name: 'Galaxy S21',
    manufacturer: 'Samsung',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'phantom gray',
    price: 799,
    imageFileName: 'Samsung-Galaxy-S21.png',
    screen: '6,2 inch Dynamic AMOLED',
    processor: 'Octa-Core 2.2GHz',
    ram: 8,
  },
  {
    id: 4,
    name: 'Galaxy Z Fold 3',
    manufacturer: 'Samsung',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'phantom black',
    price: 1809,
    imageFileName: 'Galaxy_ZFold_3.png',
    screen: '7,6 inch Dynamic AMOLED',
    processor: 'Octa-Core 1.8GHz',
    ram: 12,
  },
  {
    id: 5,
    name: 'Galaxy Z Flip',
    manufacturer: 'Samsung',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'phantom black',
    price: 1059,
    imageFileName: 'Galaxy_Z_Flip.png',
    screen: '6,7 inch',
    processor: 'Octa-Core 1.8GHz',
    ram: 8,
  },
  {
    id: 6,
    name: 'Huawei P40',
    manufacturer: 'Huawei',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'silver frost',
    price: 1099,
    imageFileName: 'Huawei_P40.png',
    screen: '6,6 inch OLED',
    processor: 'HUAWEI Kirin 990 5G',
    ram: 8,
  },
  {
    id: 7,
    name: 'Redmi 10',
    manufacturer: 'Xiaomi',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'Pebble White',
    price: 179.99,
    imageFileName: 'Redmi_10.png',
    screen: '6,5 inch DotDisplay FHD+',
    processor: 'Helio G88',
    ram: 4,
  },
];

const useCatalog = () => {
  return useContext(ProductContext);
};

const useCatalogUpdate = () => {
  return useContext(ProductUpdateContext);
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
    return 'hello from handleDetail';
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:3001/ms/delete/${id}`);
    const data = await response.json();

    console.log(data);
  };

  return (
    <ProductContext.Provider value={{ phones, handleDetail, selectedPhone, loading, handleDelete }}>
      <ProductUpdateContext.Provider value="Aquí va la funcion de update context">
        {children}
      </ProductUpdateContext.Provider>
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext, useCatalog, useCatalogUpdate };
