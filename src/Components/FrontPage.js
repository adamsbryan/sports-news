import React, {useEffect} from 'react';
import axios from 'axios';
import ScoreCard from './ScoreCard';
import logo from '../images/logo.png';
import Sliding from './Sliding';
import styled, {keyframes} from 'styled-components'

export default function FrontPage({date, setDate, games, setGames, standings, setStandings, todayData, setTodayData, yesterdayData, setYesterdayData}) {
    let newDate = date.replace(/-/g, "/");
    let year = newDate[0]+newDate[1]+newDate[2]+newDate[3];
    let month = newDate[5]+newDate[6];
    let season = 0;
    const items = [];
    const itemsBar = [];
    let itemsBarLength = 0;

    let today = new Date();
    let yesterday = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    let dd2 = dd-1;
    let selectedDate = `${newDate[5]}${newDate[6]}/${newDate[8]}${newDate[9]}`
    
    today = yyyy + '/' + mm + '/' + dd;
    yesterday = yyyy + '/' + mm + '/' + dd2;
    console.log(yesterday);

    let records = Array.from({length:30}, () => ({
        name: "",
        wins: 0,
        losses: 0
    }))

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
        setTimeout(function(){
            axios
                .get(`https://api.sportradar.us/nba/trial/v7/en/games/${today}/schedule.json?api_key=df8gew5yxy9zaqhjdxrsr5hs`)
                .then(response => {
                    setTodayData(response.data);
                })
                .catch(error => {
                    console.log("theres something wrong", error);
                });    
        }, 2000)
    }, []);

    useEffect(() => {
        setTimeout(function(){
            axios
                .get(`https://api.sportradar.us/nba/trial/v7/en/games/${yesterday}/schedule.json?api_key=df8gew5yxy9zaqhjdxrsr5hs`)
                .then(response => {
                    setYesterdayData(response.data);
                })
                .catch(error => {
                    console.log("theres something wrong", error);
                });    
        }, 3000)
    }, []);

    useEffect(() => {
        setTimeout(function(){
            axios
                .get(`http://api.sportradar.us/nba/trial/v7/en/seasons/${season}/REG/standings.json?api_key=df8gew5yxy9zaqhjdxrsr5hs`)
                .then(response => {
                    setStandings(response.data);
                })
                .catch(error => {
                    console.log("theres something wrong", error);
                });    
        }, 4000)
    }, []);

    if(standings.conferences){
        let i = 0;
        for(let j=0; j<standings.conferences.length; j++){
            for(let k=0; k<standings.conferences[j].divisions.length; k++){
                for(let l=0; l<standings.conferences[j].divisions[k].teams.length; l++){
                    records[i].name = (standings.conferences[j].divisions[k].teams[l].market);
                    records[i].name = (records[i].name + " " + standings.conferences[j].divisions[k].teams[l].name);
                    records[i].wins = (standings.conferences[j].divisions[k].teams[l].wins);
                    records[i].losses = (standings.conferences[j].divisions[k].teams[l].losses);
                    i++;
                }        
            }       
        }     
    }

    if(games.games && todayData.games && yesterdayData.games){
        console.log(todayData);
        for(let i=0; i<games.games.length; i++){
            items.push(<ScoreCard game={games.games[i]} record={records}/>)
        } 

        itemsBar.push(<div className="sliding-date"><h4>{mm + "/" + dd2}</h4></div>)
        itemsBar.length += 7;
        
        for(let i=0; i<yesterdayData.games.length; i++){
            itemsBar.push(<Sliding yesterdayGame={yesterdayData.games[i]}/>)
            itemsBarLength += 10;
        }

        itemsBar.push(<div className="slider-gap"></div>)
        itemsBarLength += 21;
        itemsBar.push(<div className="sliding-date"><h4>Today</h4></div>)
        itemsBarLength += 7;

        for(let i=0; i<todayData.games.length; i++){
            itemsBar.push(<Sliding todayGame={todayData.games[i]} record={records}/>)
            itemsBarLength += 10;
        }

        itemsBar.push(<div className="slider-gap"></div>)
        itemsBarLength += 21;
    }

    const kf = keyframes`
        0%{
            transform: translate3d(1000px, 0, 0);
        }
        100%{
            transform: translate3d(-2750px, 0, 0);
        }    
    `

    const StyledDiv = styled.div`
        width: ${itemsBarLength}rem;
        display: flex;
        flex-direction: row;
        animation: ${kf} 60s linear infinite;
    `

    return(
        <div className="front-page">
            <div className="logo-container">
                <img src={logo}></img>    
            </div>
            <div className="slider-container">
                <StyledDiv className="sliding-bar">
                    {itemsBar}
                </StyledDiv>
            </div>
            <div className="bot-section">
                <h3>Scores for {selectedDate}</h3>
                <div className="card-container">
                    {items}     
                </div>    
            </div>
        </div>
    )
};