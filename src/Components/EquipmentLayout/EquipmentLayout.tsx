import React from 'react';
import ItemDisplay from '../ItemDisplay/ItemDisplay';
import itemImage from '/Users/karl-emilkensmark/dadCalc/src/assets/Images/Box.png';
import Container from 'react-bootstrap/Container';
import { AttributeProvider } from '/Users/karl-emilkensmark/dadCalc/src/Components/AttributeContext/AttributeContext';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const EquipmentLayout: React.FC = () => {


    
    return (
        <div className = "layout">
            <Container>
                <Row className = "justify-content-center" md={3}>
                        <Col> <ItemDisplay id = "1" title="title" image = {itemImage} type = "Primary"/></Col>
                        <Col> <ItemDisplay id = "2" title="title" image = {itemImage} type = "Secondary"/></Col>
                </Row>
                <Row md={3}>
                        <Col> <ItemDisplay id = "3" title="title" image = {itemImage} type = "Legs"/></Col>
                        <Col> <ItemDisplay id = "4" title="title" image = {itemImage} type = "Body"/></Col>
                        <Col> <ItemDisplay id = "5" title="title" image = {itemImage} type = "Head"/></Col>
                </Row>
                <Row md={3}>
                        <Col> <ItemDisplay id = "6" title="title" image = {itemImage} type = "Gloves"/></Col>
                        <Col> <ItemDisplay id = "7" title="title" image = {itemImage} type = "Shoes"/></Col>
                        <Col> <ItemDisplay id = "8" title="title" image = {itemImage} type = "Cape"/></Col>
                </Row>
                <Row md={3}>
                        <Col> <ItemDisplay id = "9" title="title" image = {itemImage} type = "Ring 1"/></Col>
                        <Col> <ItemDisplay id = "10" title="title" image = {itemImage} type = "Ring 2"/></Col>
                        <Col> <ItemDisplay id = "11" title="title" image = {itemImage} type = "Necklace"/></Col>
                </Row>
            </Container>
        </div>
    );
};

export default EquipmentLayout;
