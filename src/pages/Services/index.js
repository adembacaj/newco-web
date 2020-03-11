import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CardInfo from '../../components/CardInfo';
import AddCard from '../../components/AddCard';
import './services.scss';
import images from '../../assets/images';

function Services(props) {
    const [data, setData] = useState([])
    const { serviceIcon } = images;
    const editService = () => console.log('editProduct');
    const deleteService = () => console.log('deleteProduct');
    const addService = () => console.log('add new product')
    
    useEffect(() => { setData(props.services) }, [props.services])
    return (
        <div className="services-wrapper">
            {data.map(item => {
                return (
                    <CardInfo
                        key={item._id}
                        icon={serviceIcon}
                        title={item.description}
                        subtitles={[`Price: $ ${item.price}`, `isActive: ${item.is_active}`]}
                        edit={editService}
                        delete={deleteService} />
                )
            })}
            <AddCard text='Add New Service' onClick={addService} />
        </div>
    )
}

const mapStateToProps = ({ services }) => ({ services });
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Services);