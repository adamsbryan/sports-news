import React, {useEffect} from 'react';
import axios from 'axios';
import ScoreCard from './ScoreCard';
import logo from '../images/logo.png';

export default function FrontPage({date, setDate, games, setGames, standings, setStandings}) {
    let newDate = date.replace(/-/g, "/");
    const items = [];
    let year = newDate[0]+newDate[1]+newDate[2]+newDate[3];
    let month = newDate[5]+newDate[6];
    let season = 0;

    if(year===2014 && month<=6){
        season = 2013;
    } else if(year===2015 && month<=6){
        season = 2014;
    } else if(year===2016 && month<=6){
        season = 2015;
    } else if(year===2017 && month<=6){
        season = 2016;
    } else if(year===2018 && month<=6){
        season = 2017;
    } else if(year===2019 && month<=6){
        season = 2018;
    } else if(year===2020 && month<=10){
        season = 2019;
    } else{
        season = 2020;
    }
    

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

    useEffect(() => {
        axios
            .get(`http://api.sportradar.us/nba/trial/v7/en/seasons/${season}/REG/standings.json?api_key=df8gew5yxy9zaqhjdxrsr5hs`)
            .then(response => {
                setStandings(response.data);
            })
            .catch(error => {
                console.log("theres something wrong", error);
            });
    }, []);

    if(games && games.games){
        console.log(games);
        console.log(standings);
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