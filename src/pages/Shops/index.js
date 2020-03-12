import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import CardInfo from '../../components/CardInfo';
import AddCard from '../../components/AddCard';
import './shops.scss';
import images from '../../assets/images';
import { getAllShops, deleteShop } from '../../store/actions/shops.actions';
import expandShops from '../../services/shopService';

function Shops(props) {
    const { shopIcon } = images;
    const [data, setData] = useState([]);

    const addShop = useCallback(() => { props.history.push('shops-form') }, []);

    useEffect(() => { props.getAllShops() }, [])
    useEffect(() => { getShops() }, [props.shops, props.assistants])

    async function getShops() {
        const expandedShops = await expandShops(props.shops, props.assistants);
        await setData(expandedShops)
    }
    async function deleteShop(id) {
        await props.deleteShop(id);
        await props.getAllShops()
    }
    return (
        <div className="shops-wrapper">
            {data.map(item => {
                return (
                    <CardInfo
                        key={item.id}
                        item={item}
                        icon={shopIcon}
                        title={item.name}
                        subtitles={[`City: ${item.city}`]}
                        editPath='shops-form'
                        history={props.history}
                        id={item.id}
                        deleteItem={deleteShop} />
                )
            })}
            <AddCard text='Add New Shop' onClick={addShop} />
        </div>
    )
}

const mapStateToProps = ({ shops, assistants }) => ({ shops, assistants });
const mapDispatchToProps = { getAllShops, deleteShop };

export default connect(mapStateToProps, mapDispatchToProps)(Shops);