import React from 'react';
import './addCard.scss';

function AddCard(props){
    return (
        <div onClick={props.onClick} className="add-card">
            <div className="add-card__text">{props.text}</div>
        </div>
    )
}

export default AddCard;