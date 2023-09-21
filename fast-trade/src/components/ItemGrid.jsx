import React from 'react';
import '../styles/ItemGrid.css'; // Create this CSS file for styling

const ItemGrid = ({ items }) => {
  return (
    <div className="item-grid">
      {items.map((item) => (
        <div className="item-card" key={item.id}>
          <img src={item.image} alt={item.title} className="item-image" />
          <h3 className="item-title">{item.title}</h3>
          <p className="item-price">${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemGrid;