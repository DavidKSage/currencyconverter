import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CurrencySelectTo from './CurrencySelectTo';
import CurrencySelectFrom from './CurrencySelectFrom';

function Converter() {

    const [fromCur, setFromCur] = useState('USD');
    const [toCur, setToCur] = useState('GBP');
    

    // useEffect(() => {
    //     axios.get("https://free.currconv.com/api/v7/currencies?apiKey=6590b37170c9ab1d0a11")
    //     .then(res => console.log(res.data.results))
    //     .then(res => res.data.results.forEach(result => console.log(result)))
    //     // .then(res => res.data.results.forEach(result => items.push.result))
    //     // .then(res => setItems(res.data.results))
    // }, []);

    return(
        <Container>
            <Row>
                <Col md={5}>
                    <CurrencySelectFrom setFromCur={setFromCur} />
                    <h2 className="center-text">1 {fromCur}</h2>
                </Col>
                <Col>
                    <h2 style={{textAlign: "center"}}>=</h2>
                </Col>
                <Col md={5}>
                    <CurrencySelectTo setToCur={setToCur} />
                    <h2 className="center-text">{toCur}</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default Converter;