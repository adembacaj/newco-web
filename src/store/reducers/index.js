import { combineReducers } from 'redux';
import products from './products.reducers';
import services from './services.reducers';
import shops from './shops.reducers';
import assistants from './assistants.reducers';
import customers from './customers.reducers';
import orders from './orders.reducers';

export default combineReducers({
    products,
    services,
    shops,
    assistants,
    customers,
    orders
 });