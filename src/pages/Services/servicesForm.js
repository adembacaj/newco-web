import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import './servicesForm.scss';
import { updateService, createService } from '../../store/actions/services.actions';

function ServicesForm(props) {
    const [title, setTitle] = useState('Add Service');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState();
    const [is_active, setIsActive] = useState(false);
    const [serviceId, setServiceId] = useState('')

    const handleChange = useCallback((e) => {
        const { name, value, checked } = e.target;
        switch (name) {
            case 'description': setDescription(value); break;
            case 'price': setPrice(value); break;
            case 'is_active': setIsActive(checked); break;
            default: break;
        }
    }, [])

    useEffect(() => {console.log(is_active)}, [is_active])

    useEffect(() => {
        const id = props.match.params.serviceId;
        if (id) {
            setTitle('Edit Product');
            setServiceId(id)
            setDescription(props.history.location.state.item.description);
            setPrice(props.history.location.state.item.price);
            setIsActive(props.history.location.state.item.is_active);
        }
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        if (description !== '' && price !== '') {
            const body = { description, price, is_active }
            if (serviceId) {
                props.updateService(body, serviceId);
                props.history.goBack()
            }
            else {
                props.createService(body);
                props.history.goBack()
            }
        }
    }

    return (
        <div className="services-form">
            <div className="services-form__title">{title}</div>
            <form onSubmit={onSubmit} name="serviceForm">
                <input onChange={handleChange} value={description} name="description" className="services-form__input" placeholder="Description" />
                <input onChange={handleChange} value={price} name="price" className="services-form__input" placeholder="Price" type="number" />
                <div className="services-form__switch">
                    <div className="services-form__switch-title">Is Active: </div>
                    <label className="switch">
                        <input onChange={handleChange} checked={is_active} name="is_active" type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = { createService, updateService };

export default connect(mapStateToProps, mapDispatchToProps)(ServicesForm);