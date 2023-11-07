// ImageMenu.tsx

import React from 'react';
import './ImageMenu.css';

interface ImageMenuProps {
  images: string[];
}

const ImageMenu: React.FC<ImageMenuProps> = ({ images }) => {
  return (
    <div className="image-menu">
      {images.map((img, index) => (
        <div key={index} className="image-item">
          <img src={img} alt={`item-${index}`} />
        </div>
      ))}
    </div>
  );
}

export default ImageMenu;
