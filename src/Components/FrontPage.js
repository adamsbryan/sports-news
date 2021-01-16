import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

export default function FrontPage(props) {
    let history = useHistory();
    let newDate = props.date.replace(/-/g, "/");

    useEffect(() => {
        axios
            .get(`https://api.sportradar.us/nba/trial/v7/en/games/${newDate}/schedule.json?api_key=df8gew5yxy9zaqhjdxrsr5hs`)
            .then(response => {
                props.setGames(response.data);
                console.log(props.games);
            })
            .catch(error => {
                console.log("theres something wrong", error);
            });
    }, []);

    console.log(props.games);
    
    return (
        <div>
            {props.date}
            {console.log(newDate)}
        </div>
    )
};