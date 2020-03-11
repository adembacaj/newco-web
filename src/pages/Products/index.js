import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import CardInfo from '../../components/CardInfo';
import AddCard from '../../components/AddCard';
import './products.scss';
import images from '../../assets/images';
import { deleteProduct, getAllProducts } from '../../store/actions/products.actions';

function Products(props) {
    const [data, setData] = useState([])
    const { productIcon } = images;

    const deleteProduct = useCallback((id) => {
        props.deleteProduct(id);
        props.getAllProducts()
    }, [])
    
    const addProduct = useCallback(() => { props.history.push('products-form') }, [])
    useEffect(() => { props.getAllProducts() }, [])
    useEffect(() => { setData(props.products) }, [props.products])
    return (
        <div className="products-wrapper">
            {data.map(item => {
                return (
                    <CardInfo
                        key={item._id}
                        item={item}
                        icon={productIcon}
                        title={item.description}
                        otherPropsTitle="Services:"
                        subtitles={[`Validity: ${item.validity}`, `State: ${item.state}`]}
                        otherProps={item.services}
                        editPath='products-form'
                        id={item._id}
                        history={props.history}
                        deleteItem={deleteProduct} />
                )
            })}
            <AddCard text='Add New Product' onClick={addProduct} />
        </div>
    )
}

const mapStateToProps = ({ products }) => ({ products });
const mapDispatchToProps = { deleteProduct, getAllProducts };

export default connect(mapStateToProps, mapDispatchToProps)(Products);