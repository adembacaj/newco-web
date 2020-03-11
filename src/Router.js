import React from 'react';
import { Router as BaseRouter, Route, Switch, Redirect } from 'react-router-dom';
import history from './history';

//pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductsForm from './pages/Products/productsForm';
import Services from './pages/Services';
import ServicesForm from './pages/Services/servicesForm';
import Shops from './pages/Shops';
import ShopsForm from './pages/Shops/shopsForm';
import Orders from './pages/Orders';
import OrdersForm from './pages/Orders/OrdersForm';
import ShopAssistants from './pages/ShopAssistants';
import ShopAssistantsForm from './pages/ShopAssistants/shopAssistantsForm';

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
                <Route path="/services-form/:serviceId" component={ServicesForm} />
                <Route path='/services-form' component={ServicesForm} />
                <Route path='/services' component={Services} />
                <Route path="/shops-form/:shopId" component={ShopsForm} />
                <Route path='/shops-form' component={ShopsForm} />
                <Route path='/shops' component={Shops} />
                <Route path="/orders-form/:orderId" component={OrdersForm} />
                <Route path='/orders-form' component={OrdersForm} />
                <Route path='/orders' component={Orders} />
                <Route path="/assistants-form/:assistantId" component={ShopAssistantsForm} />
                <Route path='/assistants-form' component={ShopAssistantsForm} />
                <Route path='/shop-assistant' component={ShopAssistants} />
            </Switch>
        </BaseRouter>
    )
}

export default Router;