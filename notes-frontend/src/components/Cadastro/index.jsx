import { useState } from 'react';
import axios from 'axios';
import './style.css';
import AppBar from '../AppBar';
import { useNavigate } from 'react-router-dom';


export default function Login() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Make the request to the backend API with the form data
        console.log(username,email,password);
        axios.post('http://127.0.0.1:8000/api/cadastro/', {
            username: username,
            email: email,
            password: password
        })
        // axios.post(`http://localhost:8000/api/cadastro/${username}/${email}/${password}/`)
        .then(response => {
            const token = response.data.token;
            localStorage.setItem('token', token);
            console.log(response.data);
            window.location.href = '/app';
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
    }

    return (
        <>
        <AppBar />
        <div className="login-wrapper">
            <h1 className="login-title">Crie sua conta</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label className="login-label">
                    <p>Username:</p>
                    <input className="login-input" type="text" value={username} onChange={handleUsernameChange} />
                </label>
                <label className="login-label">
                    <p>Email:</p>
                    <input className="login-input" type="email" value={email} onChange={handleEmailChange} />
                </label>
                <label className="login-label">
                    <p>Password:</p>
                    <input className="login-input" type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <div>
                    <button className="cad-btn" type="submit">Cadastar</button>
                </div>
            </form>
        </div>
        </>
    )
}