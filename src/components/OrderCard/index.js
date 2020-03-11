import React, { useCallback } from 'react';
import './orderCard.scss';

function OrderCard(props) {
    const editItem = useCallback(async() => { await props.history.push(`${props.editPath}/${props.id}`, { item: props.item }) }, []);
    const deleteItem = useCallback(() => { props.deleteItem(props.id) });
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
                <div onClick={editItem} className="order-card__right-edit">Edit</div>
                <div onClick={deleteItem} className="order-card__right-delete">Delete</div>
            </div>
        </div>
    )
}

export default OrderCard;