import { useState } from 'react';
import axios from 'axios';
import './style.css';
import AppBar from '../AppBar';

export default function Login() {
    const login = (event) => {
        event.preventDefault();
        //TODO: Aqui é com você! Faça a requisição para o backend para a rota api/token/
        // O retorno da requisição deve ser um token
        axios.post('http://localhost:8000/api/login/')
            .then(response => {
                const token = response.data.token;
                localStorage.setItem('token', token);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        window.location.href = '/';
        
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Send the form data to the backend
        // const formData = {
        //     username: username,
        //     password: password
        // };
        // axios.post('http://localhost:8000/api/login/', formData)
        axios.post(`http://localhost:8000/api/login/${username}/${password}/`)
            .then(response => {
                const token = response.data.token;
                localStorage.setItem('token', token);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        window.location.href = '/';
    }

    return (
        <>
        <AppBar />
        <div className="login-wrapper">
            <h1 className="login-title">Faça login por favor</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label className="login-label">
                    <p>Username:</p>
                    <input className="login-input" type="text" value={username} onChange={handleUsernameChange} />
                </label>
                <label className="login-label">
                    <p>Password:</p>
                    <input className="login-input" type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <div>
                    <button className="login-btn" type="submit">Submit</button>
                    <a href="/cadastro" className="login-link"> Cadastre-se</a>
                </div>
            </form>
        </div>
        </>
    )
}