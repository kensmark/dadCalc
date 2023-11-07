// App.tsx
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import './App.css';
import ImageMenu from './Components/ImageMenu/ImageMenu';
import ItemDisplay from './Components/ItemDisplay/ItemDisplay';
import Header from './Components/Header/Header';
import EquipmentLayout from './Components/EquipmentLayout/EquipmentLayout';
import { AttributeProvider, useAttributes } from './Components/AttributeContext/AttributeContext';
import ReadAttributes from './Components/ReadAttributes';

const App: React.FC = () => {

  return (
     <div className = "app">
      <div className="Equipment">
      <AttributeProvider>
        <EquipmentLayout/>
        <ReadAttributes /> 
      </AttributeProvider>
      </div>
    </div>

  );
}

export default App;