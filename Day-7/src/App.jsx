import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        if (!inputs.username || !inputs.email || !inputs.password) {
            setError("All fields are required.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/api/register', inputs);
            setMessage(response.data.message);
            // Reset form
            setInputs({ username: '', email: '', password: '' });
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data.message);
            } else {
                setError('Registration failed. Please try again.');
            }
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={inputs.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={inputs.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={inputs.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Register</button>
                {message && <p className="message success">{message}</p>}
                {error && <p className="message error">{error}</p>}
            </form>
        </div>
    );
}

export default App;