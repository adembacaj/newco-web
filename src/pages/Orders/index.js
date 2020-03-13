import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import OrderCard from '../../components/OrderCard';
import AddCard from '../../components/AddCard';
import './orders.scss';
import images from '../../assets/images';
import { getAllOrders, deleteOrder } from '../../store/actions/orders.actions';
import orderService from '../../services/orderService';
import DeleteModal from '../../components/DeleteModal';

function Orders(props) {
    const { orders, customers, shops, assistants, products, services } = props;
    const { orderIcon } = images;
    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false)
    const [deleteId, setDeleteId] = useState('')
    const addOrder = useCallback(() => { props.history.push('orders-form') }, [])

    useEffect(() => {
        props.getAllOrders();
        const expandedOrders = orderService.expandOrders(orders, customers, shops, assistants, products, services)
        setData(expandedOrders)
    }, [])
    const deleteOrder = async() => {
        setModal(!modal)
        await props.deleteOrder(deleteId);
        await props.getAllOrders()
    }
    const toggleModal = useCallback((id) => {
        setModal(!modal);
        setDeleteId(id)
    }, [modal])

    return (
        <div className="orders-wrapper">
            <DeleteModal title="Delete Order" text="Do you want to delete this Order?" isOpen={modal} toggle={toggleModal} delete={deleteOrder} />
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
                        deleteItem={toggleModal} />
                )
            })}
            <AddCard text='Add New Order' onClick={addOrder} />
        </div>
    )
}

const mapStateToProps = ({ orders, customers, shops, assistants, products, services }) => ({ orders, customers, shops, assistants, products, services });
const mapDispatchToProps = { getAllOrders, deleteOrder };

export default connect(mapStateToProps, mapDispatchToProps)(Orders);