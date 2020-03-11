import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import CardInfo from '../../components/CardInfo';
import AddCard from '../../components/AddCard';
import './customers.scss';
import images from '../../assets/images';
import { deleteCustomer, getAllCustomers } from '../../store/actions/customers.actions';

function Customers(props) {
    const [data, setData] = useState([])
    const { customerIcon } = images;
    const addCustomer = useCallback(() => { props.history.push('customers-form') }, []);

    const deleteCustomer = useCallback((id) => {
        props.deleteCustomer(id);
        props.getAllCustomers()
    }, []);

    useEffect(() => { setData(props.customers) }, [props.customers]);
    useEffect(() => { props.getAllCustomers() }, [])
    return (
        <div className="customers-wrapper">
            {data.map(item => {
                return (
                    <CardInfo
                        item={item}
                        key={item._id}
                        icon={customerIcon}
                        title={`${item.name} ${item.surname}`}
                        editPath='customers-form'
                        id={item._id}
                        history={props.history}
                        deleteItem={deleteCustomer} />
                )
            })}
            <AddCard text='Add New Customer' onClick={addCustomer} />
        </div>
    )
}

const mapStateToProps = ({ customers }) => ({ customers });
const mapDispatchToProps = { deleteCustomer, getAllCustomers };

export default connect(mapStateToProps, mapDispatchToProps)(Customers);