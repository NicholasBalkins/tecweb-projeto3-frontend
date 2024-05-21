import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './index.css';

function Rank() {
    const [ranks, setRanks] = useState([]);

    const config = {
        headers: {
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      };
    


    useEffect(() => {
        const fetchRanks = () => {
            axios.get('http://127.0.0.1:8000/api/all_ranks/',config)
            .then(response => {
                setRanks(response.data);
            })
            .catch(error => {
                console.error('Falha ao buscar os ranks', error);
            });
        };

        fetchRanks();  // Chama imediatamente ao montar o componente
        const intervalId = setInterval(fetchRanks, 10000);  // Configura o polling a cada 5 segundos

        return () => clearInterval(intervalId);  // Limpa o intervalo quando o componente é desmontado
    }, []);

    // const handleDelete = (id) => {
    //     axios.post(`http://127.0.0.1:8000/api/cadastro/${username}/${email}/${password}/`)
    //         .then(response => {
    //             // Handle successful deletion
    //         })
    //         .catch(error => {
    //             console.error('Falha ao deletar o rank', error);
    //         });
    // };

    const handleClick = (user,tag) => {
        // Navigate to a new page based on the rank data
        // You can use React Router or any other navigation library here
    
        event.preventDefault();
        // TODO: Send the form data to the backend
        const formData = {
            user: user,
            tag: tag
        };
        //Oi barbara
        axios.post('http://127.0.0.1:8000/api/historico/', formData, config)
            .then(response => {
                const token = response.data.token;
                localStorage.setItem('token', token);
                window.location.href = `historico/${user}/${tag}`;
            })
            .catch(error => {
                console.error('Error:', error);
            });
        
    };

    return (
        <div className='container'>
            {ranks.map((rank, index) => (
                <button key={index} className='rank' onClick={() => handleClick(rank.usuario,rank.tag)}>
                    <img className='usuario-pfp' src='src\assets\img\Grandmaster_Emblem.png' />
                    <div className='rank-info'>
                        <div className='rank-info-top'>                    
                            <h3 className='usuario'>{rank.usuario}#({rank.tag})</h3>
                            {/* <button className='rank-dlt' onClick={() => handleDelete(index)}>
                                <img className='lixo' src='src\assets\img\lixoW.png' />
                            </button> */}
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
