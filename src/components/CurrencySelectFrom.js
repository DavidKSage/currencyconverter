import React, { useState } from 'react';
import Select from 'react-select'
import { options } from './Options';

function CurrencySelectFrom({ setFromCur}) {

    const [selectedOption, setSelectedOption] = useState(null)

    function handleChange(e) {
        setSelectedOption(e.value);
        console.log(e.label);
        setFromCur(e.value);
    }

    return(
        <div>
            <Select
                options={options} 
                value={selectedOption}
                onChange={handleChange}
            />
        </div>
    )
}

export default CurrencySelectFrom;