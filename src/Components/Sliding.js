import React from 'react';

export default function Sliding({game}) {
    console.log(game);
    return(
        <div className="sliding-card">
            <p>Final</p>
            <div className="left-side">
                <h4>{game.home.alias}</h4>    
                <h4>{game.away.alias}</h4>
            </div>
            <div className="right-side">
                {game.home_points}    
                {game.away_points}
            </div>
            
            
            
        </div>
    )
}