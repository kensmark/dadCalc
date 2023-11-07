import React, { useState } from 'react';
import { useAttributes } from '../AttributeContext/AttributeContext.tsx';  // Import the context hook
import dropdownOptions from './attributeOptions';
import './ItemDisplay.css';

interface Attribute {
  name: string;
  value: string;
}

interface ItemProps {
  id: string; // Added unique ID prop
  title: string;
  image: string;
  type: string;
}

const ItemDisplay: React.FC<ItemProps> = ({ id, title, image, type }) => {
  const [attributesMap, setAttributesMap] = useAttributes();
  const attributes = attributesMap[id] || []; // Get attributes for this specific ItemDisplay
  const [selectedAttribute, setSelectedAttribute] = useState<string>('Action speed');

  const isValidNumber = (s: string): boolean => {
    return !isNaN(Number(s)) && s.trim() !== "";
  };

  const addAttribute = () => {
    if (attributes.length < 9) {
      const newAttributes = [...attributes, { name: selectedAttribute, value: "" }];
      setAttributesMap(prev => ({ ...prev, [id]: newAttributes })); // Update the context with the new attributes
      console.log(attributesMap);
    }
  };

  const updateAttributes = (index: number, name: string, value: string) => {
    const newAttributes = [...attributes];
    newAttributes[index].name = name;
    newAttributes[index].value = value;
    setAttributesMap(prev => ({ ...prev, [id]: newAttributes })); // Update the context with the modified attributes
  };

  return (
    <div className="item-container">
      <h1 className="main-title">{type}</h1>
      <div className="item-display">
        <div className="item-content">
          <img src={image} alt="Item" className="image-box" />
          <div className="description-box">
            {attributes.map((attribute, index) => (
              <div key={index}>
                <select 
                  className="attribute-dropdown" 
                  value={attribute.name} 
                  onChange={(e) => updateAttributes(index, e.target.value, attribute.value)}
                >
                  {dropdownOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <input 
                  className="attribute-input" 
                  type="text" 
                  placeholder="" 
                  value={attribute.value} 
                  onChange={(e) => {
                    if (isValidNumber(e.target.value) || e.target.value === "") {
                      updateAttributes(index, attribute.name, e.target.value);
                    }
                  }}
                />
              </div>
            ))}
            {attributes.length < 9 && <button className="button" onClick={addAttribute}>+</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDisplay;
