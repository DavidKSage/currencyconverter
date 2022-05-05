import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { currOptions } from './Options';

function CurrencySelectFrom({ setFromCur}) {

    const [selectedOption, setSelectedOption] = useState("USD")

    function handleChange(e) {
        setSelectedOption(e.target.value);
        // console.log(e.target.label);
        setFromCur(e.target.value);
    }

    

    return(
        <div>
            <Form.Select
                value={selectedOption}
                onChange={e => handleChange(e)}>
                {currOptions.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
            ))}
            </Form.Select>
        </div>
    )
}

export default CurrencySelectFrom;