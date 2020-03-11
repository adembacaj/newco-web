import React from 'react';
import './cardInfo.scss';

function CardInfo(props) {
    return (
        <div className="card-info">
            <div className="card-info__left">
                <img className="card-info__left-icon" src={props.icon} />
                <div className="card-info__left-infos">
                    <div className="card-info__left-infos-title">{props.title}</div>
                    {props.subtitles && props.subtitles.map((item, index) => {
                        return <div key={index} className="card-info__left-infos-subtitle">{item}</div>
                    })}
                    <div className="card-info__left-infos-title">{props.otherPropsTitle}</div>
                    <div className="card-info__left-infos-otherprops">
                        {props.otherProps && props.otherProps.map((item, index) => {
                            return (
                                <div key={index} className="card-info__left-infos-otherprops-container">
                                    <div key={index} className="card-info__left-infos-otherprops-container-badge">{item.description}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="card-info__right">
                <div onClick={props.edit} className="card-info__right-edit">Edit</div>
                <div onClick={props.delete} className="card-info__right-delete">Delete</div>
            </div>
        </div>
    )
}

export default CardInfo;