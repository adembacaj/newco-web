import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import CardInfo from '../../components/CardInfo';
import AddCard from '../../components/AddCard';
import './shops.scss';
import images from '../../assets/images';
import { getAllShops, deleteShop } from '../../store/actions/shops.actions';

function Shops(props) {
    const [data, setData] = useState([]);

    const { shopIcon } = images;
    const addShop = useCallback(() => { props.history.push('shops-form') }, []);

    const deleteShop = useCallback((id) => {
        props.deleteShop(id);
        props.getAllShops()
    }, []);

    useEffect(() => { props.getAllShops() }, [])
    useEffect(() => { setData(props.shops) }, [props.shops])
    return (
        <div className="shops-wrapper">
            {data.map(item => {
                return (
                    <CardInfo
                        key={item._id}
                        item={item}
                        icon={shopIcon}
                        title={item.name}
                        subtitles={[`City: ${item.city}`]}
                        editPath='shops-form'
                        history={props.history}
                        id={item._id}
                        deleteItem={deleteShop} />
                )
            })}
            <AddCard text='Add New Shop' onClick={addShop} />
        </div>
    )
}

const mapStateToProps = ({ shops }) => ({ shops });
const mapDispatchToProps = { getAllShops, deleteShop };

export default connect(mapStateToProps, mapDispatchToProps)(Shops);