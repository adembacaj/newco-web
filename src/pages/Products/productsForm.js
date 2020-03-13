import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import './productsForm.scss';
import { updateProduct, createProduct } from '../../store/actions/products.actions';

function ProductsForm(props) {
    const [title, setTitle] = useState('Add Product');
    const [serviceValue, setServiceValue] = useState('');
    const [serviceOptions, setServiceOptions] = useState([])
    const [description, setDescription] = useState('');
    const [validity, setValidity] = useState('');
    const [state, setState] = useState('');
    const [stocks, setStocks] = useState(false);
    const [productId, setProductId] = useState('')

    const handleServiceSelect = useCallback((service) => { setServiceValue(service) }, [serviceValue]);
    const handleChange = useCallback((e) => {
        const { name, value, checked } = e.target;
        switch (name) {
            case 'description': setDescription(value); break;
            case 'validity': setValidity(value); break;
            case 'state': setState(value); break;
            case 'stocks': setStocks(checked); break;
            default: break;
        }
    }, [])

    useEffect(() => {
        /*
            This is an effect similar to componentDidMount()
        */
        const id = props.match.params.productId;
        if (id) {
            setTitle('Edit Product');
            setProductId(id)
            setDescription(props.history.location.state.item.description);
            setValidity(props.history.location.state.item.validity);
            setState(props.history.location.state.item.state);
            setStocks(props.history.location.state.item.stocks);
            let services = [];
            props.history.location.state.item.services.forEach(service => services.push({ label: service.description, value: service.id }));
            setServiceValue(services)
        }
    }, [])
    useEffect(() => {
        /*
            This is an effect similar to componentDidUpdate(), in our case, it is called for every change on props.products and props.services
        */
        let options = [];
        props.services.forEach(service => options.push({ label: service.description, value: service.id }))
        setServiceOptions([{ label: 'Services', options }])
    }, [props.services])

    const onSubmit = (e) => {
        e.preventDefault();
        let services = [];
        if (description !== '' && validity !== '' && state !== '' && serviceValue) {
            serviceValue.forEach(service => services.push(service.value))
            const body = { description, validity, state, services: `[${services}]`, stocks }
            if (productId) {
                props.updateProduct(body, productId);
                props.history.goBack()
            }
            else {
                props.createProduct(body);
                props.history.goBack()
            }
        }
    }

    return (
        <div className="products-form">
            <div className="products-form__title">{title}</div>
            <form onSubmit={onSubmit} name="productForm">
                <input onChange={handleChange} value={description} name="description" className="products-form__input" placeholder="Description" />
                <input onChange={handleChange} value={validity} name="validity" className="products-form__input" placeholder="Validity" />
                <input onChange={handleChange} value={state} name="state" className="products-form__input" placeholder="State" />
                <Select
                    className="products-form__input"
                    styles={{ control: () => ({ width: '100%', height: 50, display: 'flex' }) }}
                    isMulti
                    key="services"
                    placeholder="Add a Service"
                    name="services"
                    value={serviceValue}
                    onChange={handleServiceSelect}
                    options={serviceOptions}
                />
                <div className="products-form__switch">
                    <div className="products-form__switch-title">Is out of stocks: </div>
                    <label className="switch">
                        <input onChange={handleChange} checked={stocks} name="stocks" type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = ({ services }) => ({ services });
const mapDispatchToProps = { createProduct, updateProduct };

export default connect(mapStateToProps, mapDispatchToProps)(ProductsForm);