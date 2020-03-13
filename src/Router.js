import React, { Suspense, lazy } from 'react';
import { Router as BaseRouter, Route, Switch } from 'react-router-dom';
import history from './history';
import Navbar from './components/Navbar';
import PageLoader from './components/PageLoader';

//pages
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const ProductsForm = lazy(() => import('./pages/Products/productsForm'));
const Services = lazy(() => import('./pages/Services'));
const ServicesForm = lazy(() => import('./pages/Services/servicesForm'));
const Shops = lazy(() => import('./pages/Shops'));
const ShopsForm = lazy(() => import('./pages/Shops/shopsForm'));
const Orders = lazy(() => import('./pages/Orders'));
const OrdersForm = lazy(() => import('./pages/Orders/OrdersForm'));
const ShopAssistants = lazy(() => import('./pages/ShopAssistants'));
const ShopAssistantsForm = lazy(() => import('./pages/ShopAssistants/shopAssistantsForm'));
const Customers = lazy(() => import('./pages/Customers'));
const CustomersForm = lazy(() => import('./pages/Customers/customersForm'));

function Router(props) {
    return (
        <BaseRouter history={history}>
            <Navbar history={history} />
            <Suspense fallback={<PageLoader />}>
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
                    <Route path="/customers-form/:customerId" component={CustomersForm} />
                    <Route path='/customers-form' component={CustomersForm} />
                    <Route path='/customers' component={Customers} />
                </Switch>
            </Suspense>
        </BaseRouter>
    )
}

export default Router;