import React from 'react';
import { connect } from 'react-redux';
import CardInfo from '../../components/CardInfo';
import AddCard from '../../components/AddCard';
import './products.scss';
import images from '../../assets/images';

function Products(props) {
    const { productIcon } = images;
    const editProduct = () => console.log('editProduct');
    const deleteProduct = () => console.log('deleteProduct');
    const addProduct = () => console.log('add new product')
    return (
        <div className="products-wrapper">
            {[1, 2, 3, 4].map(item => {
                return (
                    <CardInfo
                        icon={productIcon}
                        title="Description"
                        subtitles={['Validity', 'State']}
                        edit={editProduct}
                        delete={deleteProduct} />
                )
            })}
            <AddCard text='Add New Product' onClick={addProduct} />
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Products);