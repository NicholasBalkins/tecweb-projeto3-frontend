import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './index.css';

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

    const handleDelete = (id) => {
        axios.post('https://projeto-2-backend-nicholas.onrender.com/api/delete_rank/', { id })
            .then(response => {
                // Handle successful deletion
            })
            .catch(error => {
                console.error('Falha ao deletar o rank', error);
            });
    };

    const handleClick = (user,tag) => {
        // Navigate to a new page based on the rank data
        // You can use React Router or any other navigation library here
        window.location.href = `/${user}/${tag}`;
    };

    return (
        <div className='container'>
            {ranks.map((rank, index) => (
                <button key={index} className='rank' onClick={() => handleClick(rank.usuario,rank.tag)}>
                    <img className='usuario-pfp' src='src\assets\img\Grandmaster_Emblem.png' />
                    <div className='rank-info'>
                        <div className='rank-info-top'>                    
                            <h3 className='usuario'>{rank.usuario}#({rank.tag})</h3>
                            <button className='rank-dlt' onClick={() => handleDelete(index)}>
                                <img className='lixo' src='src\assets\img\lixoW.png' />
                            </button>
                        </div>
                        <div className='rank-info-bottom'>   
                            <img className='rank-img' src='src\assets\img\Grandmaster_Emblem.png' />
                            <p className='rank-ranking'> {rank.tier} {rank.rank} - Points: {rank.league_points}</p>
                        </div>
                    </div>
                </button>
            ))}
        </div>
    );
}

export default Rank;
