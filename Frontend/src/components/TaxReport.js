import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaxReport({ userId }) {
    const [report, setReport] = useState({ income: null, payments: [] });

    useEffect(() => {
        const fetchReport = async () => {
            const response = await axios.get(`/payment/report/${userId}`);
            setReport(response.data);
        };
        fetchReport();
    }, [userId]);

    return (
        <div>
            <h2>Tax Report</h2>
            {report.income && (
                <div>
                    <p>Income: {report.income.income}</p>
                    <h3>Payments</h3>
                    <ul>
                        {report.payments.map((payment, index) => (
                            <li key={index}>Amount: {payment.amount}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default TaxReport;
