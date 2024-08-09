import React, { useState } from 'react';
import axios from 'axios';

function Login({ setUserId }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        await axios.post('/auth/login', { username, password });
        alert('User authenticated');
        setUserId(username); // Example userId
    };

    return (
        <div>
            <h2>Login</h2>
            <label>Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Login;
