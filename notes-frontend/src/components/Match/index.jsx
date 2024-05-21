import React from 'react';

const Match = ({ Match }) => {
  return (
    <p>Histórico</p> 
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
  );
};

export { Match };