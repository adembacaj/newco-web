import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import OrderCard from '../../components/OrderCard';
import AddCard from '../../components/AddCard';
import './orders.scss';
import images from '../../assets/images';
import { getAllOrders, deleteOrder } from '../../store/actions/orders.actions';
import expandOrders from '../../services/orderService';

function Orders(props) {
    const { orders, customers, shops, assistants, products, services } = props;
    const [data, setData] = useState([]);
    const { orderIcon } = images;

    const deleteOrder = useCallback(async (id) => {
        await props.deleteOrder(id);
        await props.getAllOrders()
    }, [])
    const addOrder = useCallback(() => { props.history.push('orders-form') }, [])

    useEffect(() => {
        props.getAllOrders();
        const expandedOrders = expandOrders(orders, customers, shops, assistants, products, services)
        setData(expandedOrders)
    }, [orders, customers, shops, assistants, products, services])
    return (
        <div className="orders-wrapper">
            {data.map(item => {
                return (
                    <OrderCard
                        key={item.id}
                        customer={item.customer.name}
                        shop={item.shop.name}
                        assistant={item.assistant.name}
                        product={item.product.description}
                        service={item.service.description}
                        icon={orderIcon}
                        editPath={'orders-form'}
                        id={item.id}
                        item={item}
                        history={props.history}
                        deleteItem={deleteOrder} />
                )
            })}
            <AddCard text='Add New Order' onClick={addOrder} />
        </div>
    )
}

const mapStateToProps = ({ orders, customers, shops, assistants, products, services }) => ({ orders, customers, shops, assistants, products, services });
const mapDispatchToProps = { getAllOrders, deleteOrder };

export default connect(mapStateToProps, mapDispatchToProps)(Orders);