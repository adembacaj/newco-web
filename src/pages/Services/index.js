import React from 'react';
import { connect } from 'react-redux';
import CardInfo from '../../components/CardInfo';
import AddCard from '../../components/AddCard';
import './services.scss';
import images from '../../assets/images';

function Services(props) {
    const { serviceIcon } = images;
    const editService = () => console.log('editProduct');
    const deleteService = () => console.log('deleteProduct');
    const addService = () => console.log('add new product')
    return (
        <div className="services-wrapper">
            {[1, 2, 3, 4].map(item => {
                return (
                    <CardInfo
                        icon={serviceIcon}
                        title="Description"
                        subtitles={['Price', 'is_active']}
                        edit={editService}
                        delete={deleteService} />
                )
            })}
            <AddCard text='Add New Service' onClick={addService} />
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Services);