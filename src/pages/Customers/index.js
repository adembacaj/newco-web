import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import CardInfo from '../../components/CardInfo';
import AddCard from '../../components/AddCard';
import './customers.scss';
import images from '../../assets/images';
import { deleteCustomer, getAllCustomers } from '../../store/actions/customers.actions';
import DeleteModal from '../../components/DeleteModal';

function Customers(props) {
    const { customerIcon } = images;
    const [data, setData] = useState([])
    const [modal, setModal] = useState(false)
    const [deleteId, setDeleteId] = useState('')

    const addCustomer = useCallback(() => { props.history.push('customers-form') }, []);
    const getData = useCallback(async () => { await setData(props.customers) }, [props.customers])

    useEffect(() => {
        /*
            This is an effect, which is similar to componentDidMount()
            Here we are calling an action called getAllCostumers, where we get all costumers and we store them on Redux
        */
        props.getAllCustomers();
        getData();
    }, []);

    async function deleteCustomer() {
        setModal(!modal);
        await props.deleteCustomer(deleteId);
        await props.getAllCustomers()
    }
    const toggleModal = useCallback((id) => {
        setModal(!modal);
        setDeleteId(id)
    }, [modal])
    return (
        <div className="customers-wrapper">
            <DeleteModal title="Delete Customer" text="Do you want to delete this customer?" isOpen={modal} toggle={toggleModal} delete={deleteCustomer} />
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
                        deleteItem={toggleModal} />
                )
            })}
            <AddCard text='Add New Customer' onClick={addCustomer} />
        </div>
    )
}

const mapStateToProps = ({ customers }) => ({ customers });
const mapDispatchToProps = { deleteCustomer, getAllCustomers };

export default connect(mapStateToProps, mapDispatchToProps)(Customers);