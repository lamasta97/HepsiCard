import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Ürünler alınırken bir hata oluştu:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <section key={product.id} className="card">
          <div className="card-image">
            {product.images && product.images.length > 0 ? (
              <img src={product.images[0]} alt={product.title} />
            ) : (
              'Loading...'
            )}
          </div>
          <div className="card-title">
            {product.title}
            <div className="product-price">
              {product.price} TL
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductList;
