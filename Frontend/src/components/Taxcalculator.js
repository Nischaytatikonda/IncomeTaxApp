import React, { useState } from 'react';
import axios from 'axios';

function TaxCalculator({ userId }) {
    const [tax, setTax] = useState(null);

    const calculateTax = async () => {
        const response = await axios.post('/income/calculate-tax', { userId });
        setTax(response.data.tax);
    };

    return (
        <div>
            <h2>Calculate Tax</h2>
            <button onClick={calculateTax}>Calculate Tax</button>
            {tax !== null && <div id="result">Calculated Tax: {tax}</div>}
        </div>
    );
}

export default TaxCalculator;
