import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { currOptions } from './Options';

function CurrencySelectTo({ setToCur}) {

    const [selectedOption, setSelectedOption] = useState("GBP")

    function handleChange(e) {
        setSelectedOption(e.target.value);
        // console.log(e.label);
        setToCur(e.target.value);
    }
    
    return(
        <div>
            <Form.Select
                value={selectedOption}
                onChange={e => handleChange(e)}>
                {currOptions.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
            ))}
            <option selected value="USD">US Dollar</option>
            </Form.Select>
        </div>
    )
}

export default CurrencySelectTo;