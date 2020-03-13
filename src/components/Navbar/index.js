import React, { useCallback, useState } from 'react';
import './navbar.scss';

function Navbar(props) {
    const [isActive, setIsActive] = useState('/')
    const onClick = useCallback((e) => {
        props.history.push(`${e.target.name}`)
        setIsActive(e.target.name)
    }, [])

    return (
        <div className="navbar">
            <div className="navbar__left">
                <div className="navbar__left-title">NewCO</div>
            </div>
            <div className="navbar__right">
                <ul>
                    <li><button is-active={isActive === '/' ? 'true' : 'false'} name="/" onClick={onClick}>Home</button></li>
                    <li><button is-active={isActive === '/products' ? 'true' : 'false'} name="/products" onClick={onClick}>Products</button></li>
                    <li><button is-active={isActive === '/services' ? 'true' : 'false'} name="/services" onClick={onClick}>Services</button></li>
                    <li><button is-active={isActive === '/shops' ? 'true' : 'false'} name="/shops" onClick={onClick}>Shops</button></li>
                    <li><button is-active={isActive === '/shop-assistant' ? 'true' : 'false'} name="/shop-assistant" onClick={onClick}>Assistants</button></li>
                    <li><button is-active={isActive === '/customers' ? 'true' : 'false'} name="/customers" onClick={onClick}>Customers</button></li>
                    <li><button is-active={isActive === '/orders' ? 'true' : 'false'} name="/orders" onClick={onClick}>Orders</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;