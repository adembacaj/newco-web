import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import CardInfo from '../../components/CardInfo';
import AddCard from '../../components/AddCard';
import './shopAssistants.scss';
import images from '../../assets/images';
import { deleteAssistant, getAllAssistants } from '../../store/actions/assistants.actions';
import DeleteModal from '../../components/DeleteModal';

function ShopAssistants(props) {
    const { assistantIcon } = images;
    const [data, setData] = useState([])
    const [modal, setModal] = useState(false)
    const [deleteId, setDeleteId] = useState('')

    const addShopAssistant = useCallback(() => { props.history.push('assistants-form') }, [])
    const getData = useCallback(async () => { await setData(props.assistants) }, [])

    useEffect(() => {
        props.getAllAssistants();
        getData()
    }, []);

    async function deleteAssistant() {
        setModal(!modal);
        await props.deleteAssistant(deleteId);
        await props.getAllAssistants()
    }
    const toggleModal = useCallback((id) => {
        setModal(!modal);
        setDeleteId(id)
    }, [modal])

    return (
        <div className="assistants-wrapper">
            <DeleteModal title="Delete Shop Assistant" text="Do you want to delete this Shop Assistant?" isOpen={modal} toggle={toggleModal} delete={deleteAssistant} />
            {data.map(item => {
                return (
                    <CardInfo
                        item={item}
                        key={item.id}
                        icon={assistantIcon}
                        title={`${item.name} ${item.surname}`}
                        editPath='assistants-form'
                        id={item.id}
                        history={props.history}
                        deleteItem={toggleModal} />
                )
            })}
            <AddCard text='Add New Shop Assistant' onClick={addShopAssistant} />
        </div>
    )
}

const mapStateToProps = ({ assistants }) => ({ assistants });
const mapDispatchToProps = { deleteAssistant, getAllAssistants };

export default connect(mapStateToProps, mapDispatchToProps)(ShopAssistants);