import React, { useCallback } from 'react';
import './cardInfo.scss';

function CardInfo(props) {
    const editItem = useCallback(() => { props.history.push(`${props.editPath}/${props.id}`, {item: props.item}) }, []);
    const deleteItem = useCallback(() => {props.deleteItem(props.id)});
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
                <div onClick={editItem} className="card-info__right-edit">Edit</div>
                <div onClick={deleteItem} className="card-info__right-delete">Delete</div>
            </div>
        </div>
    )
}

export default CardInfo;