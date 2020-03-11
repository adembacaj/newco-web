import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CardInfo from '../../components/CardInfo';
import AddCard from '../../components/AddCard';
import './products.scss';
import images from '../../assets/images';

function Products(props) {
    const [data, setData] = useState([])
    const { productIcon } = images;
    const editProduct = () => console.log('editProduct');
    const deleteProduct = () => console.log('deleteProduct');
    const addProduct = () => console.log('add new product')
    
    useEffect(() => { setData(props.products) }, [props.products])
    return (
        <div className="products-wrapper">
            {data.map(item => {
                return (
                    <CardInfo
                        key={item._id}
                        icon={productIcon}
                        title={item.description}
                        otherPropsTitle="Services:"
                        subtitles={[`Validity: ${item.validity}`, `State: ${item.state}`]}
                        otherProps={item.services}
                        edit={editProduct}
                        delete={deleteProduct} />
                )
            })}
            <AddCard text='Add New Product' onClick={addProduct} />
        </div>
    )
}

const mapStateToProps = ({ products }) => ({ products });
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Products);