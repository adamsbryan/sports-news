import React, {useEffect} from 'react';
import axios from 'axios';
import ScoreCard from './ScoreCard';
import logo from '../images/logo.png';

export default function FrontPage({date, setDate, games, setGames}) {
    let newDate = date.replace(/-/g, "/");
    const items = [];

    useEffect(() => {
        axios
            .get(`https://api.sportradar.us/nba/trial/v7/en/games/${newDate}/schedule.json?api_key=df8gew5yxy9zaqhjdxrsr5hs`)
            .then(response => {
                setGames(response.data);
            })
            .catch(error => {
                console.log("theres something wrong", error);
            });
    }, []);

    if(games && games.games){
        console.log(games);
        for(let i=0; i<games.games.length; i++){
            items.push(<ScoreCard game={games.games[i]}/>)
        } 
    }

    return(
        <div className="front-page">
            <div className="container">
                <img src={logo}></img>    
            </div>
            
            <div className="container">
                {items}     
            </div>
              
        </div>
    )
};