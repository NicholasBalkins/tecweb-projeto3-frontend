import Formulario from "./components/Formulario";
import Rank from "./components/Rank";
import "./App.css";
import React, { useState } from 'react';

function App() {
    const [rankData, setRankData] = useState([]);

    return (
        <div>
            <Formulario setRankData={setRankData} />
            <Rank rankData={rankData} />
        </div>
    );
}

export default App;
