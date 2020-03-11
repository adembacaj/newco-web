import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import './shopAssistantsForm.scss';
import { updateAssistant, createAssistant } from '../../store/actions/assistants.actions';

function ShopAssistantsForm(props) {
    const [title, setTitle] = useState('Add Assistant');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [assistantId, setAssistantId] = useState('')

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name': setName(value); break;
            case 'surname': setSurname(value); break;
            default: break;
        }
    }, [])

    useEffect(() => {
        const id = props.match.params.assistantId;
        if (id) {
            setTitle('Edit Assistant');
            setAssistantId(id)
            setName(props.history.location.state.item.name);
            setSurname(props.history.location.state.item.surname);
        }
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        if (name !== '' && surname !== '') {
            const body = { name, surname }
            if (assistantId) {
                props.updateAssistant(body, assistantId);
                props.history.goBack()
            }
            else {
                props.createAssistant(body);
                props.history.goBack()
            }
        }
    }

    return (
        <div className="assistants-form">
            <div className="assistants-form__title">{title}</div>
            <form onSubmit={onSubmit} name="serviceForm">
                <input onChange={handleChange} value={name} name="name" className="assistants-form__input" placeholder="Assistant Name" />
                <input onChange={handleChange} value={surname} name="surname" className="assistants-form__input" placeholder="Assistant Surname"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = { createAssistant, updateAssistant };

export default connect(mapStateToProps, mapDispatchToProps)(ShopAssistantsForm);