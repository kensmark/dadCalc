import React, {useContext, useState} from 'react';
import { useAttributes } from './AttributeContext/AttributeContext'; // Update with the path to your context file


interface Attribute {
    name: string;
    value: string;
  }


const DisplayAttributesButton: React.FC = () => {
    const [attributesMap, setAttributesMap] = useAttributes();
    //const attributes = useContext(useAttributes);

    const handleButtonClick = () => {
        console.log(attributesMap);
    };

      

    return (
        <button 
            onClick={handleButtonClick} 
            style={{
                position: 'fixed',
                top: '10px',
                right: '10px',
                zIndex: 1000  // Ensure the button is above other elements
            }}
        >
            Print Attributes
        </button>
    );
}

export default DisplayAttributesButton;
