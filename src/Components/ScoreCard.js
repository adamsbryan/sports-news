import React from 'react';
import NBALogos from './Logos';

export default function ScoreCard({game, record}) {
    let homeWins = 0;
    let homeLosses = 0;
    let awayWins = 0;
    let awayLosses = 0;

    for(let i=0; i<30; i++){
        if(game.home.name === record[i].name){
            homeWins = record[i].wins;
            homeLosses = record[i].losses;
        }
        if(game.away.name === record[i].name){
            awayWins = record[i].wins;
            awayLosses = record[i].losses;
        }
    }

    if(game.home_points > game.away_points){
        return(
            <div className="score-card">
                <div className="home-team">
                    <div className="left-side">
                        <div className="team">
                            <NBALogos team={game.home.alias}/>
                            <h2>{game.home.name}</h2>    
                        </div>
                        <div className="record">
                            (
                            {homeWins}
                            -
                            {homeLosses}
                            )
                        </div>    
                    </div>
                    <div className="winner-side">
                        {game.home_points}    
                    </div>
                </div>
                <div className="away-team">
                    <div className="left-side">
                        <div className="team">
                            <NBALogos team={game.away.alias}/>
                            <h2>{game.away.name} </h2>   
                        </div>
                        <div className="record">
                            (
                            {awayWins}
                            -
                            {awayLosses}
                            )
                        </div>    
                    </div>
                    <div className="loser-side">
                        {game.away_points}    
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div className="score-card">
                <div className="home-team">
                    <div className="left-side">
                        <div className="team">
                            <NBALogos team={game.home.alias}/>
                            <h2>{game.home.name}</h2>    
                        </div>
                        <div className="record">
                            (
                            {homeWins}
                            -
                            {homeLosses}
                            )
                        </div>    
                    </div>
                    <div className="loser-side">
                        {game.home_points}    
                    </div>
                </div>
                <div className="away-team">
                    <div className="left-side">
                        <div className="team">
                            <NBALogos team={game.away.alias}/>
                            <h2>{game.away.name} </h2>   
                        </div>
                        <div className="record">
                            (
                            {awayWins}
                            -
                            {awayLosses}
                            )
                        </div>    
                    </div>
                    <div className="winner-side">
                        {game.away_points}    
                    </div>
                </div>
            </div>
        )
    }
};