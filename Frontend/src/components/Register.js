import React, { useState } from 'react';
import axios from 'axios';

function Register({ setUserId }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {
        await axios.post('/auth/register', { username, password });
        alert('User registered');
        setUserId(username); // Example userId
    };

    return (
        <div>
            <h2>Register</h2>
            <label>Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={register}>Register</button>
        </div>
    );
}

export default Register;
