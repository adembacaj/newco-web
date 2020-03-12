import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import './shopsForm.scss';
import { updateShop, createShop } from '../../store/actions/shops.actions';

function ShopsForm(props) {
    const [title, setTitle] = useState('Add Shop');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [shopId, setShopId] = useState('');
    const [assistantValue, setAssistantValue] = useState([]);
    const [assistantOptions, setAssistantOptions] = useState([]);

    const handleAssistantSelect = useCallback(async(assistant) => { await setAssistantValue(assistant) }, [setAssistantValue]);
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name': setName(value); break;
            case 'city': setCity(value); break;
            default: break;
        }
    }, [])

    useEffect(() => {
        const id = props.match.params.shopId;
        if (id) {
            setTitle('Edit Shop');
            setShopId(id)
            setName(props.history.location.state.item.name);
            setCity(props.history.location.state.item.city);
            if (props.history.location.state.item.assistants) {
                let assistants = [];
                props.history.location.state.item.assistants.forEach(assistant => assistants.push({ label: `${assistant.name} ${assistant.surname}`, value: assistant.id }));
                setAssistantValue(assistants)
            }
        }
    }, [])
    useEffect(() => {
        let options = [];
        props.assistants.forEach(assistant => options.push({ label: `${assistant.name} ${assistant.surname}`, value: assistant.id }))
        setAssistantOptions([{ label: 'Shop Assistants', options }])
    }, [props.assistants])

    const onSubmit = (e) => {
        e.preventDefault();
        let assistants = [];
        if (name !== '' && city !== '' && assistantValue !== null) {
            assistantValue.forEach(assistant => assistants.push(assistant.value))
            const body = { name, city, assistants: `[${assistants}]` }
            if (shopId) {
                props.updateShop(body, shopId);
                props.history.goBack()
            }
            else {
                props.createShop(body);
                props.history.goBack()
            }
        }
    }

    return (
        <div className="shops-form">
            <div className="shops-form__title">{title}</div>
            <form onSubmit={onSubmit} name="shopsForm">
                <input onChange={handleChange} value={name} name="name" className="shops-form__input" placeholder="Name" />
                <input onChange={handleChange} value={city} name="city" className="shops-form__input" placeholder="City" />
                <Select
                    className="shops-form__input"
                    styles={{ control: () => ({ width: '100%', height: 50, display: 'flex' }) }}
                    isMulti
                    key="Assistants"
                    placeholder="Assign a Shop Assistant"
                    name="assistants"
                    value={assistantValue}
                    onChange={handleAssistantSelect}
                    options={assistantOptions}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = ({ assistants }) => ({ assistants });
const mapDispatchToProps = { createShop, updateShop };

export default connect(mapStateToProps, mapDispatchToProps)(ShopsForm);