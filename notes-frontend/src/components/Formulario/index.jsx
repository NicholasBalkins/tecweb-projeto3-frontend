import React, { useState } from 'react';
import './index.css';
import axios from 'axios';

export default function Formulario({ setRankData }) {  // Recebe setRankData como prop
    const [usuario, setUsuario] = useState('');
    const [tag, setTag] = useState("");
    
    const config = {
        headers: {
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      };

    const acharRank = (event) => {
        event.preventDefault();
        const userdata = {

            "usuario": usuario,
            "tag": tag,
        }

        const data = {
            config: config,
            userdata: userdata,
        }

        axios.post(`http://127.0.0.1:8000/api/${usuario}/${tag}/`, data)
        .then((response) => {
            setRankData(response.data);  // Passa os dados do ranking para o componente pai
            setUsuario("");
            setTag("");
        })
        .catch((error) => console.log(error));
    }

    


    return (
        <form className="form-card" onSubmit={acharRank}>
            <input
                id="usuario"
                className="form-card-title"
                type="text"
                name="usuario"
                placeholder="Digite o nome de usuário..."
                onChange={(event) => setUsuario(event.target.value)}
                value={usuario}
            />
            <textarea
                className="form-card-title"
                name="tag"
                placeholder="Digite a Tag..."
                onChange={(event) => setTag(event.target.value)}
                value={tag}
            ></textarea>
            <button type="submit" className="search-btn">Procurar</button>
        </form>
    );
}
