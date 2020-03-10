import React from 'react';
import { connect } from 'react-redux';
import CardInfo from '../../components/CardInfo';
import AddCard from '../../components/AddCard';
import './shops.scss';
import images from '../../assets/images';

function Shops(props) {
    const { shopIcon } = images;
    const editShop = () => console.log('editProduct');
    const deleteShop = () => console.log('deleteProduct');
    const addShop = () => console.log('add new product')
    return (
        <div className="shops-wrapper">
            {[1, 2, 3, 4].map(item => {
                return (
                    <CardInfo
                        icon={shopIcon}
                        title="Name"
                        subtitles={['City', 'State']}
                        edit={editShop}
                        delete={deleteShop} />
                )
            })}
            <AddCard text='Add New Shop' onClick={addShop} />
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Shops);