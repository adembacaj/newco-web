import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import './ordersForm.scss';
import { updateOrder, createOrder } from '../../store/actions/orders.actions';

function OrdersForm(props) {
    const [title, setTitle] = useState('Add Order');
    const [customerValue, setCustomerValue] = useState();
    const [customerOptions, setCustomerOptions] = useState([]);
    const [shopValue, setShopValue] = useState();
    const [shopOptions, setShopOptions] = useState([]);
    const [assistantValue, setAssistantValue] = useState();
    const [assistantOptions, setAssistantOptions] = useState([]);
    const [productValue, setProductValue] = useState();
    const [productOptions, setProductOptions] = useState([]);
    const [serviceValue, setServiceValue] = useState();
    const [serviceOptions, setServiceOptions] = useState([]);
    const [orderId, setOrderId] = useState()

    const handleCustomerSelect = useCallback((customer) => { setCustomerValue(customer) }, [customerValue]);
    const handleShopSelect = useCallback((shop) => { setShopValue(shop) }, [shopValue]);
    const handleAssistantSelect = useCallback((assistant) => { setAssistantValue(assistant) }, [assistantValue]);
    const handleProductSelect = useCallback((product) => { setProductValue(product) }, [productValue]);
    const handleServiceSelect = useCallback((service) => { setServiceValue(service) }, [serviceValue]);

    useEffect(() => {
        const id = props.match.params.orderId;
        if (id) {
            const {customer, shop, assistant, product, service} = props.history.location.state.item;
            setTitle('Edit Order');
            setOrderId(id)
            setCustomerValue({label: `${customer.name} ${customer.surname}`, value: customer.id});
            setShopValue({label: shop.name, value: shop.id});
            setAssistantValue({label: `${assistant.name} ${assistant.surname}`, value: assistant.id});
            setProductValue({label: product.description, value: product.id});
            setServiceValue({label: service.description, value: service.id});
        }
    }, [])

    useEffect(() => {
        let customerOption = [];
        let shopOption = [];
        let assistantOption = [];
        let productOption = [];
        let serviceOption = [];

        props.customers.forEach(customer => customerOption.push({ label: `${customer.name} ${customer.surname}`, value: customer.id }));
        props.shops.forEach(shop => shopOption.push({ label: shop.name, value: shop.id }));
        props.assistants.forEach(assistant => assistantOption.push({ label: `${assistant.name} ${assistant.surname}`, value: assistant.id }));
        props.products.forEach(product => productOption.push({ label: product.description, value: product.id }));
        props.services.forEach(service => serviceOption.push({ label: service.description, value: service.id }));

        setCustomerOptions([{ label: 'Customers', options: customerOption }]);
        setShopOptions([{ label: 'Shops', options: shopOption }]);
        setAssistantOptions([{ label: 'Assistants', options: assistantOption }]);
        setProductOptions([{ label: 'Products', options: productOption }]);
        setServiceOptions([{ label: 'Services', options: serviceOption }]);
    }, [props.customers, props.shops, props.assistants, props.products, props.services])

    const onSubmit = (e) => {
        e.preventDefault();
        if (customerValue !== '' && shopValue !== '' && assistantValue !== '' && productValue !== '' && serviceValue !== '') {
            const body = { 
                customer: customerValue.value,
                shop: shopValue.value,
                assistant: assistantValue.value,
                product: productValue.value,
                service: serviceValue.value
             }
            if (orderId) {
                props.updateOrder(body, orderId);
                props.history.goBack()
            }
            else {
                props.createOrder(body);
                props.history.goBack()
            }
        }
    }

    return (
        <div className="orders-form">
            <div className="orders-form__title">{title}</div>
            <form onSubmit={onSubmit} name="ordersForm">
                <Select
                    className="orders-form__input"
                    styles={{ control: () => ({ width: '100%', height: 50, display: 'flex' }) }}
                    key="customer"
                    placeholder="Select a Customer"
                    name="customer"
                    value={customerValue}
                    onChange={handleCustomerSelect}
                    options={customerOptions}
                />
                <Select
                    className="orders-form__input"
                    styles={{ control: () => ({ width: '100%', height: 50, display: 'flex' }) }}
                    key="shops"
                    placeholder="Select a Shop"
                    name="shops"
                    value={shopValue}
                    onChange={handleShopSelect}
                    options={shopOptions}
                />
                <Select
                    className="orders-form__input"
                    styles={{ control: () => ({ width: '100%', height: 50, display: 'flex' }) }}
                    key="assistant"
                    placeholder="Select a Shop Assistant"
                    name="assistant"
                    value={assistantValue}
                    onChange={handleAssistantSelect}
                    options={assistantOptions}
                />
                <Select
                    className="orders-form__input"
                    styles={{ control: () => ({ width: '100%', height: 50, display: 'flex' }) }}
                    key="product"
                    placeholder="Select a Product"
                    name="product"
                    value={productValue}
                    onChange={handleProductSelect}
                    options={productOptions}
                />
                <Select
                    className="orders-form__input"
                    styles={{ control: () => ({ width: '100%', height: 50, display: 'flex' }) }}
                    key="service"
                    placeholder="Select a Service"
                    name="service"
                    value={serviceValue}
                    onChange={handleServiceSelect}
                    options={serviceOptions}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = ({ customers, shops, assistants, products, services }) => ({ customers, shops, assistants, products, services });
const mapDispatchToProps = { createOrder, updateOrder };

export default connect(mapStateToProps, mapDispatchToProps)(OrdersForm);