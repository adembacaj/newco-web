import React from 'react';
import './homeCard.scss';

function HomeCard(props) {
    return (
        <div className="home-card">
            <div className="home-card__header">{props.header}</div>
            <div className="home-card__body">
                {props.data.map((element, index) => {
                    return (
                        <div key={index} className="home-card__body-item">
                            <div className="home-card__body-item-left">{props.isStock ? element.description : element.name}</div>
                            <div className="home-card__body-item-right">{element.sales}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HomeCard;