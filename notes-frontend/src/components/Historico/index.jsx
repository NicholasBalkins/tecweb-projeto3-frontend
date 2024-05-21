import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppBar from '../AppBar';
import Rank from '../Rank';
import { useParams } from 'react-router-dom';
import './style.css';

function Historico() {
    const { user, tag } = useParams();
    const [historico, setHist] = useState([]);

    useEffect(() => {
        const fetchRanks = () => {
            axios.get(`http://127.0.0.1:8000/api/historico/${user}/${tag}/`)
                .then(response => {
                    setHist(response.data);
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Falha ao buscar o Historico', error);
                });
        };

        fetchRanks();  // Chama imediatamente ao montar o componente
    }, [user, tag]);

    return (
        <>
            <AppBar />
            <Rank />
            <div className='Historico'>
                <h1>KDA - RESULTADO - MODO DE JOGO</h1>
                <p>Histórico</p>
                <ol className='linha'>
                    {historico.map((match, index) => (
                        <p key={index} className='linha'>
                            <div className='col'>
                                <p>Kills: {match.kills}</p>
                                <p>Deaths: {match.deaths}</p>
                                <p>Assists: {match.assists}</p>
                            </div>
                            <div className='col'>
                                <p>Win: {match.win ? 'Yes' : 'No'}</p>
                            </div>
                            <div className='col'>
                                <p>Game Mode: {match.game_mode}</p>
                            </div>
                        </p>
                    ))}
                </ol>
            </div>
        </>
    );
}

export default Historico;
