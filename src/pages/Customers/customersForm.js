import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import './customersForm.scss';
import { updateCustomer, createCustomer } from '../../store/actions/customers.actions';

function CustomersForm(props) {
    const [title, setTitle] = useState('Add Customer');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [address, setAddress] = useState('');
    const [phone_number, setPhoneNumber] = useState();
    const [customerId, setCustomerId] = useState('')

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name': setName(value); break;
            case 'surname': setSurname(value); break;
            case 'address': setAddress(value); break;
            case 'phone_number': setPhoneNumber(value); break;
            default: break;
        }
    }, [])

    useEffect(() => {
        const id = props.match.params.customerId;
        if (id) {
            setTitle('Edit Customer');
            setCustomerId(id)
            setName(props.history.location.state.item.name);
            setSurname(props.history.location.state.item.surname);
            setAddress(props.history.location.state.item.address);
            setPhoneNumber(props.history.location.state.item.phone_number);
        }
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        if (name !== '' && surname !== '' && address !== '' && phone_number) {
            const body = { name, surname, address, phone_number }
            if (customerId) {
                props.updateCustomer(body, customerId);
                props.history.goBack()
            }
            else {
                props.createCustomer(body);
                props.history.goBack()
            }
        }
    }

    return (
        <div className="customers-form">
            <div className="customers-form__title">{title}</div>
            <form onSubmit={onSubmit} name="customerForm">
                <input onChange={handleChange} value={name} name="name" className="customers-form__input" placeholder="Customer Name" />
                <input onChange={handleChange} value={surname} name="surname" className="customers-form__input" placeholder="Customer Surname"/>
                <input onChange={handleChange} value={address} name="address" className="customers-form__input" placeholder="Customer Address"/>
                <input onChange={handleChange} value={phone_number} name="phone_number" className="customers-form__input" placeholder="Customer Phone Number" type="number" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = { createCustomer, updateCustomer };

export default connect(mapStateToProps, mapDispatchToProps)(CustomersForm);