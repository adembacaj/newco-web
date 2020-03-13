import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import CardInfo from '../../components/CardInfo';
import AddCard from '../../components/AddCard';
import './customers.scss';
import images from '../../assets/images';
import { deleteCustomer, getAllCustomers } from '../../store/actions/customers.actions';

function Customers(props) {
    const { customerIcon } = images;
    const [data, setData] = useState([])
    
    const addCustomer = useCallback(() => { props.history.push('customers-form') }, []);
    const getData = useCallback(async() => {await setData(props.customers)}, [props.customers])

    useEffect(() => {
        props.getAllCustomers();
        getData();
    }, [props.customers]);

    async function deleteCustomer(id) {
        await props.deleteCustomer(id);
        await props.getAllCustomers()
    }
    return (
        <div className="customers-wrapper">
            {data.map(item => {
                return (
                    <CardInfo
                        item={item}
                        key={item.id}
                        icon={customerIcon}
                        title={`${item.name} ${item.surname}`}
                        subtitles={[item.address, item.phone_number]}
                        editPath='customers-form'
                        id={item.id}
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