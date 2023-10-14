import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CurrencySelectTo from './CurrencySelectTo';
import CurrencySelectFrom from './CurrencySelectFrom';
import axios from 'axios';
import { currOptions } from './Options';

function Converter() { 

    const [fromCur, setFromCur] = useState('USD');
    const [toCur, setToCur] = useState('GBP');
    const [rate, setRate] = useState();
    let optFrom = currOptions.find(option => option.value === fromCur);
    let optTo = currOptions.find(option => option.value === toCur);
   

    useEffect(() => {
        axios.get(`https://v6.exchangerate-api.com/v6/7775cc050e86656f28e93692/pair/${fromCur}/${toCur}/1`)
       .then(res => setRate(res.data.conversion_result))
       .catch(err => {
           alert("API is not responding", err.code);
       })
    }, [fromCur, toCur]);

    return(
        <Container>
            <Row>
                <Col md={5}>
                    <CurrencySelectFrom setFromCur={setFromCur} />
                    <h2 className="center-text">1 {optFrom.label}</h2>
                    <h2 className="center-text">{ fromCur } {`(${optFrom.symbol})`}</h2>
                    
                </Col>
                <Col>
                    <h2 style={{textAlign: "center"}}>=</h2>
                </Col>
                <Col md={5}>
                    <CurrencySelectTo setToCur={setToCur} />
                    <h2 className="center-text">{rate} { optTo.label }</h2>
                    <h2 className="center-text">{ toCur } {`(${optTo.symbol})`}</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default Converter;
