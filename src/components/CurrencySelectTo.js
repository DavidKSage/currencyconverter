import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function CurrencySelectTo({setToCur}) {

    return(
        <div>
            <Button onClick={() => setToCur('EUR')}>
                Set to EUR
            </Button>
        </div>
    )
}

export default CurrencySelectTo;