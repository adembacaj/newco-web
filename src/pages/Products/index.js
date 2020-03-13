import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import CardInfo from '../../components/CardInfo';
import AddCard from '../../components/AddCard';
import './products.scss';
import images from '../../assets/images';
import { deleteProduct, getAllProducts } from '../../store/actions/products.actions';
import expandProducts from '../../services/productService';

function Products(props) {
    const [data, setData] = useState([])
    const { productIcon } = images;

    useEffect(() => { props.getAllProducts() }, [props.products])
    useEffect(() => { getProducts() }, [props.products, props.services])

    const addProduct = useCallback(() => { props.history.push('products-form') }, []);
    
    async function getProducts() {
        const expandedProducts = await expandProducts(props.products, props.services);
        await setData(expandedProducts)
    }
    async function deleteProduct(id) {
        await props.deleteProduct(id);
        await props.getAllProducts()
    }
    return (
        <div className="products-wrapper">
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
                        deleteItem={deleteProduct} />
                )
            })}
            <AddCard text='Add New Product' onClick={addProduct} />
        </div>
    )
}

const mapStateToProps = ({ products, services }) => ({ products, services });
const mapDispatchToProps = { deleteProduct, getAllProducts };

export default connect(mapStateToProps, mapDispatchToProps)(Products);