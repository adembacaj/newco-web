import React from 'react';
import './orderCard.scss';

function CardInfo(props) {
    return (
        <div className="order-card">
            <div className="order-card__left">
                <img className="order-card__left-icon" src={props.icon} />
                <div className="order-card__left-infos">
                    <div>Customer: {props.customer}</div>
                    <div>Shop: {props.shop}</div>
                    <div>Assistant: {props.assistant}</div>
                    <div>Product: {props.product}</div>
                    <div>Service: {props.service}</div>
                </div>
            </div>
            <div className="order-card__right">
                <div onClick={props.edit} className="order-card__right-edit">Edit</div>
                <div onClick={props.delete} className="order-card__right-delete">Delete</div>
            </div>
        </div>
    )
}

export default CardInfo;