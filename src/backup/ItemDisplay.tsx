import React, { useState } from 'react';
import itemImage from '/Users/karl-emilkensmark/dadCalc/src/Item.png';
import './ItemDisplay.css';

interface Attribute {
  name: string;
  value: number;
}

const ItemDisplay: React.FC = () => {
  const [attributes, setAttributes] = useState<Attribute[]>([]); // State for attributes
  const [selectedAttribute, setSelectedAttribute] = useState<string>('Strength'); // Default selected attribute

  const addAttribute = () => {
    if (attributes.length < 7) {
      setAttributes([...attributes, { name: selectedAttribute, value: 0 }]);
    }
  };

  return (
    <div className="item-display">
      <div className="item-content">
        <img src={itemImage} alt="Item" className="image-box" />
        <div className="description-box">
          <h2 className = "item-text">Marauder Outfit</h2>
          {attributes.map((attribute, index) => (
            <div key={index}>
              <select className="attribute-dropdown" value={attribute.name} /*... onChange logic ... */>
                <option value="Strength">Strength</option>
                <option value="Agility">Agility</option>
                {/*... add more options ...*/}
              </select>
              <input className="attribute-input" type="number" value={attribute.value} /*... onChange logic ... */ />
            </div>
          ))}
          {attributes.length < 7 && <button className="button" onClick={addAttribute}>+</button>}
        </div>
      </div>
    </div>
  );
};

export default ItemDisplay;
