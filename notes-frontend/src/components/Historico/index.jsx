import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppBar from '../AppBar';
import Rank from '../Rank';
import { useParams } from 'react-router-dom';

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
                        <li key={index} className='linha'>
                            <ol className='col'>
                                <li>Kills: {match.kills}</li>
                                <li>Deaths: {match.deaths}</li>
                                <li>Assists: {match.assists}</li>
                            </ol>
                            <ol className='col'>
                                <li>Win: {match.win ? 'Yes' : 'No'}</li>
                            </ol>
                            <ol className='col'>
                                <li>Game Mode: {match.game_mode}</li>
                            </ol>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
}

export default Historico;
