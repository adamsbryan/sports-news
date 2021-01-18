import React from 'react';

export default function ScoreCard({game}) {
    return(
        <div className="score-card">
            <div className="home-team">
                {game.home.name}
                {game.home_points}
            </div>
            <div className="away-team">
                {game.away.name}
                {game.away_points}
            </div>
        </div>
    )
};