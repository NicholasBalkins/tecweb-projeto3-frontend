import { useState } from 'react';
import axios from 'axios';
import './style.css';
import AppBar from '../AppBar';

export default function Login() {
    const login = (event) => {
        event.preventDefault();
        //TODO: Aqui é com você! Faça a requisição para o backend para a rota api/token/
        // O retorno da requisição deve ser um token
        axios.post('http://localhost:8000/api/cadastro/')
            .then(response => {
                const token = response.data.token;
                localStorage.setItem('token', token);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        
    }

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        // axios.post('http://localhost:8000/api/cadastro/', {
        //     username: username,
        //     email: email,
        //     password: password
        // })
        axios.post(`http://localhost:8000/api/cadastro/${username}/${email}/${password}/`)
        .then(response => {
            const token = response.data.token;
            localStorage.setItem('token', token);
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        // window.location.href = '/';
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