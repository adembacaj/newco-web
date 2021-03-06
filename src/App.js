import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Router from './Router';
import axios from 'axios';
import config from './config';
import { getAllProducts, getProductSales, getProductsOutOfStocks } from './store/actions/products.actions';
import { getAllServices, getTopSoldServices } from './store/actions/services.actions';
import { getAllShops, getShopSales } from './store/actions/shops.actions';
import { getAllAssistants, getAssistantSales, getBestAssistantSales, getWorstAssistantSales } from './store/actions/assistants.actions';
import { getAllCustomers } from './store/actions/customers.actions';
import { getAllOrders } from './store/actions/orders.actions';

function App(props) {
  axios.defaults.baseURL = config.baseURL; //we have imported baseURL from config file and setted it as a default baseURL
  useEffect(() => {
    props.getAllAssistants();
    props.getAllCustomers();
    props.getAllOrders();
    props.getAllProducts();
    props.getAllServices();
    props.getAllShops();
    props.getProductSales();
    props.getTopSoldServices();
    props.getAssistantSales();
    props.getShopSales();
    props.getBestAssistantSales();
    props.getWorstAssistantSales();
    props.getProductsOutOfStocks();
  }, [])
  return (
    <>
      <Router />
    </>
  );
}

const mapStateToProps = null;
const mapDispatchToProps = {
  getAllAssistants,
  getAllCustomers,
  getAllOrders,
  getAllProducts,
  getAllServices,
  getAllShops,
  getProductSales,
  getTopSoldServices,
  getProductsOutOfStocks,
  getAssistantSales,
  getShopSales,
  getBestAssistantSales,
  getWorstAssistantSales,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
