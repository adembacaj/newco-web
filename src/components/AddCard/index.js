import React from 'react';
import './addCard.scss';

function AddCard({ onClick, text }) {
    return (
        <div onClick={onClick} className="add-card">
            <div className="add-card__text">{text}</div>
        </div>
    )
}

export default AddCard;