import React, { useState } from 'react';
import Select from 'react-select'
import { options } from './Options';

function CurrencySelectTo({ setToCur}) {

    const [selectedOption, setSelectedOption] = useState(null)

    function handleChange(e) {
        setSelectedOption(e.value);
        console.log(e.value);
        setToCur(e.value);
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

export default CurrencySelectTo;