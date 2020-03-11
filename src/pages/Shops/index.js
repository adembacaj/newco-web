import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CardInfo from '../../components/CardInfo';
import AddCard from '../../components/AddCard';
import './shops.scss';
import images from '../../assets/images';

function Shops(props) {
    const [data, setData] = useState([]);

    const { shopIcon } = images;
    const editShop = () => console.log('editProduct');
    const deleteShop = () => console.log('deleteProduct');
    const addShop = () => console.log('add new product');

    useEffect(() => { setData(props.shops) }, [props.shops])
    return (
        <div className="shops-wrapper">
            {data.map(item => {
                return (
                    <CardInfo
                        key={item._id}
                        icon={shopIcon}
                        title={item.name}
                        subtitles={[`City: ${item.city}`]}
                        edit={editShop}
                        delete={deleteShop} />
                )
            })}
            <AddCard text='Add New Shop' onClick={addShop} />
        </div>
    )
}

const mapStateToProps = ({ shops }) => ({ shops });
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Shops);