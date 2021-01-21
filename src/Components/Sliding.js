import React from 'react';
import NBALogos from './Logos';

export default function Sliding({todayGame, yesterdayGame, record}) {
    let homeWins = 0;
    let homeLosses = 0;
    let awayWins = 0;
    let awayLosses = 0;

    if(todayGame){
        for(let i=0; i<30; i++){
            if(todayGame.home.name === record[i].name){
                homeWins = record[i].wins;
                homeLosses = record[i].losses;
            }
            if(todayGame.away.name === record[i].name){
                awayWins = record[i].wins;
                awayLosses = record[i].losses;
            }
        }
        
        return(
            <div className="sliding-card">
                <p>Upcoming</p>
                <div className="first-team">
                    <div className="team-alias">
                        <NBALogos smallTeam={todayGame.home.alias}/>
                        {todayGame.home.alias}    
                    </div>
                    <div>
                        (
                        {homeWins}
                        -
                        {homeLosses}
                        )
                    </div>  
                </div>
                <div className="second-team">
                <div className="team-alias">
                        <NBALogos smallTeam={todayGame.away.alias}/>
                        {todayGame.away.alias}    
                    </div>
                    <div>
                        (
                        {awayWins}
                        -
                        {awayLosses}
                        )
                    </div> 
                </div>
            </div>
        )    
    } else if(yesterdayGame.home_points){
        return(
            <div className="sliding-card">
                <p>Final</p>
                <div className="first-team">
                    <div className="team-alias">
                        <NBALogos smallTeam={yesterdayGame.home.alias}/>
                        {yesterdayGame.home.alias}    
                    </div>
                    <div className="team-points">
                        {yesterdayGame.home_points}      
                    </div>
                </div>
                <div className="second-team">
                <div className="team-alias">
                        <NBALogos smallTeam={yesterdayGame.away.alias}/>
                        {yesterdayGame.away.alias}    
                    </div>
                    <div className="team-points">
                        {yesterdayGame.away_points}      
                    </div>
                </div>
            </div>
        )    
    } else {
        return(
            <div className="sliding-card">
                <p>Final</p>
                <div className="first-team">
                    <div className="team-alias">
                        <NBALogos smallTeam={yesterdayGame.home.alias}/>
                        {yesterdayGame.home.alias}    
                    </div>
                    <div className="team-points">
                        PPD     
                    </div>
                </div>
                <div className="second-team">
                <div className="team-alias">
                        <NBALogos smallTeam={yesterdayGame.away.alias}/>
                        {yesterdayGame.away.alias}    
                    </div>
                    <div className="team-points">
                        PPD      
                    </div>
                </div>
            </div>
        )    
    }
}