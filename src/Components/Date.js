import React from 'react';
import {useHistory} from 'react-router-dom';

export default function DateSetter(props) {
    let history = useHistory();

    const changeInput = (e) => {
        const {value} = e.target;
        props.setDate(value);
    }
    
    const handleClick = () => {
        history.push('/front')
    }

    return(
        <div className="date">
            <h2>Select date to get started</h2>
            <input type="date" onChange={changeInput}></input>
            <div className="button">
                <button type="button" onClick={handleClick}>
                    Lets begin!
                </button>
            </div>
        </div>
    )
};