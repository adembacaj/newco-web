import React from 'react';
import './homeCard.scss';

function HomeCard(props){
    return (
        <div className="home-card">
            <div className="home-card__header">{props.header}</div>
            <div className="home-card__body">{props.body}</div>
        </div>
    )
}

export default HomeCard;