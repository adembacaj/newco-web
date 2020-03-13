import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import CardInfo from '../../components/CardInfo';
import AddCard from '../../components/AddCard';
import './shops.scss';
import images from '../../assets/images';
import { getAllShops, deleteShop } from '../../store/actions/shops.actions';
import expandShops from '../../services/shopService';
import DeleteModal from '../../components/DeleteModal';

function Shops(props) {
    const { shopIcon } = images;
    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false)
    const [deleteId, setDeleteId] = useState('')

    const addShop = useCallback(() => { props.history.push('shops-form') }, []);

    useEffect(() => {
        props.getAllShops();
        getShops();
    }, [])

    async function getShops() {
        const expandedShops = await expandShops(props.shops, props.assistants);
        await setData(expandedShops)
    }
    async function deleteShop() {
        setModal(!modal);
        await props.deleteShop(deleteId);
        await props.getAllShops()
    }
    const toggleModal = useCallback((id) => {
        setModal(!modal);
        setDeleteId(id)
    }, [modal])

    return (
        <div className="shops-wrapper">
            <DeleteModal title="Delete Shop" text="Do you want to delete this Shop?" isOpen={modal} toggle={toggleModal} delete={deleteShop} />
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
                        deleteItem={toggleModal} />
                )
            })}
            <AddCard text='Add New Shop' onClick={addShop} />
        </div>
    )
}

const mapStateToProps = ({ shops, assistants }) => ({ shops, assistants });
const mapDispatchToProps = { getAllShops, deleteShop };

export default connect(mapStateToProps, mapDispatchToProps)(Shops);