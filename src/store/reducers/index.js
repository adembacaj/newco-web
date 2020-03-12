import { combineReducers } from 'redux';
import products from './products.reducers';
import services from './services.reducers';
import shops from './shops.reducers';
import assistants from './assistants.reducers';
import customers from './customers.reducers';
import orders from './orders.reducers';
import productSales from './product.sales.reducers';
import topSoldServices from './service.sales.reducers';
import productsOutOfStocks from './products.out.of.stocks.redcers';
import assistantSales from './assistant.sales.reducers';
import shopSales from './shop.sales.reducers';

export default combineReducers({
    products,
    services,
    shops,
    assistants,
    customers,
    orders,
    productSales,
    topSoldServices,
    productsOutOfStocks,
    assistantSales,
    shopSales
 });