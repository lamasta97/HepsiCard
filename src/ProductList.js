import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Styles.css';



const ProductList = () => {
  const [imageUrl, setImageUrl] = useState(''); // use state bileşenini resim urlsini saklamak için kullanmam lazımdı axios url sıkıntı yaşayabiliyor hafif chatten yardım aldım yine
  // Dayanamadım chat gpt olmadan :D 

  useEffect(() => {
    // API olarak picsum kullandım chate sordum dedim ki sadece random resim geenrator api öner 
    const fetchImage = async () => {
      try {
        const response = await axios.get('https://picsum.photos/200/300'); // Axios kullan demiştin burda get methodu kullandım
        
        setImageUrl(response.request.responseURL);
      } catch (error) {
        console.error('Resim alınırken bir hata oluştu:', error);
      }
    };

    fetchImage();
  }, []);

  return (  // Buraları tamamen kendim yazdım zaten taskı yaparken de başlamıştım 
    <section className='card'>
      <div className='card-image'>
        {imageUrl ? (
          <img src={imageUrl} alt='Random' />
        ) : (
          'Loading...'
        )}
        <div className='card-title'>
          Apple iPhone 15 Pro Max 256 Gb
          <div className='product-price'>
            78.749 TL
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
