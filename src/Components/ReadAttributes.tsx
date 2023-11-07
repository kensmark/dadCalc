import React, { useEffect } from 'react';
import { useAttributes } from './AttributeContext/AttributeContext'; // Update with the path to your context file

interface Attribute {
  name: string;
  value: string;
}

interface AggregatedAttributes {
  [key: string]: number;
}

const DisplayAttributesButton: React.FC = () => {
    const [attributesMap, setAttributesMap] = useAttributes();
  
    // This function aggregates all attribute values by name across all items
    const aggregateAttributeValues = () => {
      const aggregatedAttributes: AggregatedAttributes = {};
  
      // Loop over each item's attributes
      Object.values(attributesMap).forEach((attributesArray: Attribute[]) => {
        attributesArray.forEach((attribute) => {
          const value = parseFloat(attribute.value);
          if (!isNaN(value)) {
            if (aggregatedAttributes.hasOwnProperty(attribute.name)) {
              aggregatedAttributes[attribute.name] += value;
            } else {
              aggregatedAttributes[attribute.name] = value;
            }
          }
        });
      });
  
      // Convert the aggregated values into an array of Attributes
      return Object.entries(aggregatedAttributes).map(([name, value]) => ({
        name,
        value: value.toString(),
      }));
    };
  
    useEffect(() => {
      const aggregatedAttributes = aggregateAttributeValues();
      console.log(aggregatedAttributes);
      // If you need to do something with aggregated attributes, like setting state, you can do it here
    }, [attributesMap]); // The effect will run when attributesMap changes
  
    const handleButtonClick = () => {
      console.log(attributesMap);
    };
  
    return (
      <button onClick={handleButtonClick} style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 1000,
      }}>
        Print Attributes
      </button>
    );
  };
  
  export default DisplayAttributesButton;
  