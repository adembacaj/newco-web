import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import CardInfo from '../../components/CardInfo';
import AddCard from '../../components/AddCard';
import './products.scss';
import images from '../../assets/images';
import { deleteProduct, getAllProducts, getProductsOutOfStocks } from '../../store/actions/products.actions';
import expandProducts from '../../services/productService';
import DeleteModal from '../../components/DeleteModal';

function Products(props) {
    const { productIcon } = images;
    const [data, setData] = useState([])
    const [modal, setModal] = useState(false)
    const [deleteId, setDeleteId] = useState('')

    useEffect(() => {
        props.getAllProducts();
        props.getProductsOutOfStocks();
    }, [])
    useEffect(() => {
        /*
            This is an effect similar to componentDidUpdate(), in our case, it is called for every change on props.products and props.services
        */
        getProducts()
    }, [props.products, props.services])

    const addProduct = useCallback(() => { props.history.push('products-form') }, []);

    async function getProducts() {
        const expandedProducts = await expandProducts(props.products, props.services);
        await setData(expandedProducts)
    }
    async function deleteProduct() {
        toggleModal()
        await props.deleteProduct(deleteId);
        await props.getAllProducts()
    }
    const toggleModal = useCallback((id) => {
        setModal(!modal);
        setDeleteId(id)
    }, [modal])

    return (
        <div className="products-wrapper">
            <DeleteModal title="Delete Product" text="Do you want to delete this Product?" isOpen={modal} toggle={toggleModal} delete={deleteProduct} />
            {data.map(item => {
                return (
                    <CardInfo
                        key={item.id}
                        item={item}
                        icon={productIcon}
                        title={item.description}
                        subtitles={[`Validity: ${item.validity}`, `State: ${item.state}`]}
                        editPath='products-form'
                        id={item.id}
                        history={props.history}
                        deleteItem={toggleModal} />
                )
            })}
            <AddCard text='Add New Product' onClick={addProduct} />
        </div>
    )
}

const mapStateToProps = ({ products, services }) => ({ products, services });
const mapDispatchToProps = { deleteProduct, getAllProducts, getProductsOutOfStocks };

export default connect(mapStateToProps, mapDispatchToProps)(Products);