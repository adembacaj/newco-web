import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import OrderCard from '../../components/OrderCard';
import AddCard from '../../components/AddCard';
import './orders.scss';
import images from '../../assets/images';
import { getAllOrders, deleteOrder } from '../../store/actions/orders.actions';

function Orders(props) {
    const [data, setData] = useState([])
    const { orderIcon } = images;

    const deleteOrder = useCallback(async(id) => { 
        await props.deleteOrder(id);
        await props.getAllOrders()
     }, [])
    const addOrder = useCallback(() => { props.history.push('orders-form') }, [])

    useEffect(() => { setData(props.orders) }, [props.orders])
    useEffect(() => { props.getAllOrders() }, [])
    return (
        <div className="orders-wrapper">
            {data.map(item => {
                return (
                    <OrderCard
                        key={item._id}
                        customer={item.customer.name}
                        shop={item.shop.name}
                        assistant={item.assistant.name}
                        product={item.product.description}
                        service={item.service.description}
                        icon={orderIcon}
                        editPath={'orders-form'}
                        id={item._id}
                        item={item}
                        history={props.history}
                        deleteItem={deleteOrder} />
                )
            })}
            <AddCard text='Add New Order' onClick={addOrder} />
        </div>
    )
}

const mapStateToProps = ({ orders }) => ({ orders });
const mapDispatchToProps = { getAllOrders, deleteOrder };

export default connect(mapStateToProps, mapDispatchToProps)(Orders);