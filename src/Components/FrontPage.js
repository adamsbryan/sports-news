import React from 'react';
import {useHistory} from 'react-router-dom';

export default function FrontPage(props) {
    let history = useHistory();
    
    let invis = document.getElementsByClassName('App');
    console.log(invis);
    return (
        <div>
            {props.date}
        </div>
    )
};