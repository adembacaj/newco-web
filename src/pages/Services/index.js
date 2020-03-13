import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import CardInfo from '../../components/CardInfo';
import AddCard from '../../components/AddCard';
import './services.scss';
import images from '../../assets/images';
import { deleteService, getAllServices } from '../../store/actions/services.actions';

function Services(props) {
    const [data, setData] = useState([])
    const { serviceIcon } = images;
    const addService = useCallback(() => { props.history.push('services-form') }, [])

    useEffect(() => { 
        getData()
        props.getAllServices()
     }, [props.services]);

    async function getData() {
        await setData(props.services)
    }
    async function deleteService(id) {
        await props.deleteService(id);
        await props.getAllServices()
    }
    return (
        <div className="services-wrapper">
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
                        deleteItem={deleteService} />
                )
            })}
            <AddCard text='Add New Service' onClick={addService} />
        </div>
    )
}

const mapStateToProps = ({ services }) => ({ services });
const mapDispatchToProps = { deleteService, getAllServices };

export default connect(mapStateToProps, mapDispatchToProps)(Services);