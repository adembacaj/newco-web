import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import CardInfo from '../../components/CardInfo';
import AddCard from '../../components/AddCard';
import './services.scss';
import images from '../../assets/images';
import { deleteService, getAllServices } from '../../store/actions/services.actions';
import DeleteModal from '../../components/DeleteModal';

function Services(props) {
    const { serviceIcon } = images;
    const [data, setData] = useState([])
    const [modal, setModal] = useState(false)
    const [deleteId, setDeleteId] = useState('')

    const addService = useCallback(() => { props.history.push('services-form') }, [])
    const getData = useCallback(async () => { await setData(props.services) }, [])

    useEffect(() => {
        props.getAllServices();
        getData();
    }, []);

    async function deleteService() {
        setModal(!modal);
        await props.deleteService(deleteId);
        await props.getAllServices()
    }
    const toggleModal = useCallback((id) => {
        setModal(!modal);
        setDeleteId(id)
    }, [modal])
    return (
        <div className="services-wrapper">
            <DeleteModal title="Delete Service" text="Do you want to delete this Service?" isOpen={modal} toggle={toggleModal} delete={deleteService} />
            {data.map(item => {
                return (
                    <CardInfo
                        item={item}
                        key={item.id}
                        icon={serviceIcon}
                        title={item.description}
                        subtitles={[`Price: $ ${item.price}`, `isActive: ${item.is_active}`]}
                        editPath='services-form'
                        id={item.id}
                        history={props.history}
                        deleteItem={toggleModal} />
                )
            })}
            <AddCard text='Add New Service' onClick={addService} />
        </div>
    )
}

const mapStateToProps = ({ services }) => ({ services });
const mapDispatchToProps = { deleteService, getAllServices };

export default connect(mapStateToProps, mapDispatchToProps)(Services);