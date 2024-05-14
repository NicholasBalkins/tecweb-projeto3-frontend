import { useState } from 'react';
import axios from 'axios';
import './style.css';
import AppBar from '../AppBar';

export default function search() {

    return (
        <>
        <AppBar />
        <div className="search-wrapper">
            <h1 className="search-title">Faça login por favor</h1>
            <form className="search-form" onSubmit={search}>
                <label className="search-label">
                    <p>Username:</p>
                    <input className="search-input" type="text" />
                </label>
                <label className="search-label">
                    <p>TAG:</p>
                    <input className="search-input" type="text" />
                </label>
                <div>
                    <button className="login-btn" type="submit">Pesquisar</button>
                </div>
            </form>
        </div>
        </>
    )
}