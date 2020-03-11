import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import OrderCard from '../../components/OrderCard';
import AddCard from '../../components/AddCard';
import './orders.scss';
import images from '../../assets/images';

function Orders(props) {
    const [data, setData] = useState([])
    const { orderIcon } = images;
    const editOrder = () => console.log('editProduct');
    const deleteOrder = () => console.log('deleteProduct');
    const addOrder = () => console.log('add new product')

    useEffect(() => { setData(props.orders) }, [props.orders])
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
                        edit={editOrder}
                        delete={deleteOrder} />
                )
            })}
            <AddCard text='Add New Order' onClick={addOrder} />
        </div>
    )
}

const mapStateToProps = ({ orders }) => ({ orders });
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Orders);