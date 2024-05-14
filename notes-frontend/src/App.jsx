import Formulario from "./components/Formulario";
import AppBar from "./components/AppBar";
import Rank from "./components/Rank";
import "./App.css";
import React, { useState } from 'react';

function App() {
    const [rankData, setRankData] = useState([]);

    return (
        <div>
            <AppBar />
            <Formulario setRankData={setRankData} />
            <Rank rankData={rankData} />
        </div>
    );
}

export default App;
