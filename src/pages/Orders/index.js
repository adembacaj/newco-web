import React from 'react';
import { connect } from 'react-redux';
import CardInfo from '../../components/CardInfo';
import AddCard from '../../components/AddCard';
import './orders.scss';
import images from '../../assets/images';

function Orders(props) {
    const { orderIcon } = images;
    const editOrder = () => console.log('editProduct');
    const deleteOrder = () => console.log('deleteProduct');
    const addOrder = () => console.log('add new product')
    return (
        <div className="orders-wrapper">
            {[1, 2, 3, 4].map(item => {
                return (
                    <CardInfo
                        icon={orderIcon}
                        title="Customer"
                        subtitle="Shop"
                        secondSubtitle="Assistant"
                        subtitles={['Shop', 'Assistant', 'Product', 'Service']}
                        edit={editOrder}
                        delete={deleteOrder} />
                )
            })}
            <AddCard text='Add New Shop' onClick={addOrder} />
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Orders);