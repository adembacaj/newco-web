import React from 'react';
import { Router as BaseRouter, Route, Switch, Redirect } from 'react-router-dom';
import history from './history';

//pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductsForm from './pages/Products/productsForm';
import Services from './pages/Services';
import Shops from './pages/Shops';
import Orders from './pages/Orders';

//components
import Navbar from './components/Navbar';

function Router(props) {
    return (
        <BaseRouter history={history}>
            <Navbar history={history} />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path="/products-form/:productId" component={ProductsForm} />
                <Route path='/products-form' component={ProductsForm} />
                <Route path='/products' component={Products} />
                <Route path='/services' component={Services} />
                <Route path='/shops' component={Shops} />
                <Route path='/orders' component={Orders} />
            </Switch>
        </BaseRouter>
    )
}

export default Router;