import React, { useCallback } from 'react';
import './navbar.scss';

function Navbar(props) {
    const onClick = useCallback((e) => {props.history.push(`${e.target.name}`)}, [])
    return (
        <div className="navbar">
            <div className="navbar__left">
                <div className="navbar__left-title">NewCO</div>
            </div>
            <div className="navbar__right">
                <ul>
                    <li><button name="/" onClick={onClick}>Home</button></li>
                    <li><button name="/products" onClick={onClick}>Products</button></li>
                    <li><button name="/services" onClick={onClick}>Services</button></li>
                    <li><button name="/shops" onClick={onClick}>Shops</button></li>
                    <li><button name="/orders" onClick={onClick}>Orders</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;