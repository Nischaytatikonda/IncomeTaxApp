import React, { useState } from 'react';
import axios from 'axios';

function IncomeForm({ userId }) {
    const [income, setIncome] = useState('');

    const addIncome = async () => {
        await axios.post('/income', { userId, income });
        alert('Income details added');
    };

    return (
        <div>
            <h2>Add Income</h2>
            <label>Income</label>
            <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} />
            <button onClick={addIncome}>Add Income</button>
        </div>
    );
}

export default IncomeForm;
