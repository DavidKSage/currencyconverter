import React, { useState } from 'react';
import Select from 'react-select'

function CurrencySelectFrom({setFromCur}) {

    const [selectedOption, setSelectedOption] = useState(null)

    function handleChange(e) {
        setSelectedOption(e.value);
        console.log(e.value);
        setFromCur(e.value);
    }
    
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

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