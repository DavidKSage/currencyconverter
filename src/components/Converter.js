import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CurrencySelectTo from './CurrencySelectTo';
import CurrencySelectFrom from './CurrencySelectFrom';
import axios from 'axios';

function Converter() {

    const [fromCur, setFromCur] = useState('USD');
    const [toCur, setToCur] = useState('GBP');
    const [items, setItems] = useState (["USD"])

    useEffect(() => {
        axios.get("https://free.currconv.com/api/v7/currencies?apiKey=6590b37170c9ab1d0a11")
        .then(res => console.log(res.data))
    }, []);

    return(
        <Container>
            <Row>
                <Col md={5}>
                    <CurrencySelectFrom setFromCur={setFromCur} />
                    <h5>{items}</h5>
                    <h2>{fromCur}</h2>
                </Col>
                <Col></Col>
                <Col md={5}>
                    <CurrencySelectTo setToCur={setToCur} />
                    <h2>{toCur}</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default Converter;