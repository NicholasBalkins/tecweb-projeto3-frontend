import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppBar from '../AppBar'
import Rank from '../Rank'
import { useParams } from 'react-router-dom';

function Historico() {
    const { user, tag } = useParams();
    const [historico, setHist] = useState([]);


    useEffect(() => {
        const fetchRanks = () => {
            axios.get(`http://127.0.0.1:8000/api/historico/${user}/${tag}/`)
            .then(response => {
                setHist(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Falha ao buscar o Historico', error);
            });
        };

        fetchRanks();  // Chama imediatamente ao montar o componente
        const intervalId = setInterval(fetchRanks, 5000);  // Configura o polling a cada 5 segundos

        return () => clearInterval(intervalId);  // Limpa o intervalo quando o componente é desmontado
    }, []);

    return (
        <>
        <AppBar />
        <Rank />
        <div className='Historico'>
            <p>Histórico</p>
            <h1>KDA - RESULTADO - MODO DE JOGO</h1>
            <ol className='linha'>
                <ol className='col'>
                    {historico.kills}
                    {historico.deaths}
                    {historico.assists}
                </ol>
                <ol className='col'>
                    {historico.win}
                </ol>
                <ol className='col'>
                    {historico.game_mode}
                </ol>
            </ol>
        </div>
        </>
    );
}

export default Historico;