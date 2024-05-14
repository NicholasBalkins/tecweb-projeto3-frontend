import { useState } from 'react';
import axios from 'axios';
import './style.css';
import AppBar from '../AppBar';

export default function Login() {
    const login = (event) => {
        event.preventDefault();
        //TODO: Aqui é com você! Faça a requisição para o backend para a rota api/token/
        // O retorno da requisição deve ser um token
        axios.post('http://localhost:8000/api/token/')
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
            <form className="login-form" onSubmit={login}>
                <label className="login-label">
                    <p>Username:</p>
                    <input className="login-input" type="text" />
                </label>
                <label className="login-label">
                    <p>Password:</p>
                    <input className="login-input" type="password" />
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