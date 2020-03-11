import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import CardInfo from '../../components/CardInfo';
import AddCard from '../../components/AddCard';
import './shopAssistants.scss';
import images from '../../assets/images';
import { deleteAssistant, getAllAssistants } from '../../store/actions/assistants.actions';

function ShopAssistants(props) {
    const [data, setData] = useState([])
    const { assistantIcon } = images;
    const addShopAssistant = useCallback(() => { props.history.push('assistants-form') }, [])

    const deleteAssistant = useCallback((id) => {
        props.deleteAssistant(id);
        props.getAllAssistants()
    }, []);

    useEffect(() => { setData(props.assistants) }, [props.assistants]);
    useEffect(() => { props.getAllAssistants() }, [])
    return (
        <div className="assistants-wrapper">
            {data.map(item => {
                return (
                    <CardInfo
                        item={item}
                        key={item._id}
                        icon={assistantIcon}
                        title={`${item.name} ${item.surname}`}
                        editPath='assistants-form'
                        id={item._id}
                        history={props.history}
                        deleteItem={deleteAssistant} />
                )
            })}
            <AddCard text='Add New Shop Assistant' onClick={addShopAssistant} />
        </div>
    )
}

const mapStateToProps = ({ assistants }) => ({ assistants });
const mapDispatchToProps = { deleteAssistant, getAllAssistants };

export default connect(mapStateToProps, mapDispatchToProps)(ShopAssistants);