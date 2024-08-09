import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PaymentHistory({ userId }) {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const fetchHistory = async () => {
            const response = await axios.get(`/payment/history/${userId}`);
            setHistory(response.data);
        };
        fetchHistory();
    }, [userId]);

    return (
        <div>
            <h2>Payment History</h2>
            <ul>
                {history.map((payment, index) => (
                    <li key={index}>Amount: {payment.amount}</li>
                ))}
            </ul>
        </div>
    );
}

export default PaymentHistory;
