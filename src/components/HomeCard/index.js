import React from 'react';
import './homeCard.scss';

function HomeCard({ header, isStock, data }) {
    return (
        <div className="home-card">
            <div className="home-card__header">{header}</div>
            <div className="home-card__body">
                {data.map((element, index) => {
                    return (
                        <div key={index} className="home-card__body-item">
                            <div className="home-card__body-item-left">{isStock ? element.description : element.name}</div>
                            <div className="home-card__body-item-right">{element.sales}</div>
                        </div>
                    )
                })}
                {!data.length && <div className="home-card__body-item-left">No Data</div>}
            </div>
        </div>
    )
}

export default HomeCard;