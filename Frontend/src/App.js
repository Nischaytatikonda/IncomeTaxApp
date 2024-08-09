import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import IncomeForm from './components/IncomeForm';
import TaxCalculator from './components/TaxCalculator';
import PaymentHistory from './components/PaymentHistory';
import TaxReport from './components/TaxReport';
import './App.css';

function App() {
    const [userId, setUserId] = useState(null);

    return (
        <div className="container">
            <h1>Income Tax Application</h1>
            <Register setUserId={setUserId} />
            <Login setUserId={setUserId} />
            {userId && (
                <>
                    <IncomeForm userId={userId} />
                    <TaxCalculator userId={userId} />
                    <PaymentHistory userId={userId} />
                    <TaxReport userId={userId} />
                </>
            )}
        </div>
    );
}

export default App;
