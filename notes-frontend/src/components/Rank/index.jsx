import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Rank() {
    const [ranks, setRanks] = useState([]);

    useEffect(() => {
        const fetchRanks = () => {
            axios.get('https://projeto-2-backend-nicholas.onrender.com/api/all_ranks/')
            .then(response => {
                setRanks(response.data);
            })
            .catch(error => {
                console.error('Falha ao buscar os ranks', error);
            });
        };

        fetchRanks();  // Chama imediatamente ao montar o componente
        const intervalId = setInterval(fetchRanks, 500);  // Configura o polling a cada 5 segundos

        return () => clearInterval(intervalId);  // Limpa o intervalo quando o componente é desmontado
    }, []);

    return (
        <div>
            {ranks.map((rank, index) => (
                <div key={index}>
                    <p>{rank.usuario} ({rank.tag}): {rank.tier} {rank.rank} - Points: {rank.league_points}</p>
                </div>
            ))}
        </div>
    );
}

export default Rank;
