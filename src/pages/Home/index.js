import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import HomeCard from '../../components/HomeCard';
import './home.scss'
import homeService from '../../services/homeService';
import { getAllProducts, getProductSales, getProductsOutOfStocks } from '../../store/actions/products.actions';
import { getAllServices, getTopSoldServices } from '../../store/actions/services.actions';
import { getAllShops, getShopSales } from '../../store/actions/shops.actions';
import { getAllAssistants, getAssistantSales, getBestAssistantSales, getWorstAssistantSales } from '../../store/actions/assistants.actions';
import { getAllCustomers } from '../../store/actions/customers.actions';
import { getAllOrders } from '../../store/actions/orders.actions';

function Home(props) {
    const { productSales, serviceSales, topSoldServices, productsOutOfStocks, assistantSales, products, services,
        assistants, shopSales, shops, bestAssistantSale, worstAssistantSale } = props;

    const [productSalesState, setProductSalesState] = useState([]);
    const [topSoldServicesState, setTopSoldServicesState] = useState([]);
    const [productsOutOfStocksState, setProductsOutOfStocksState] = useState([]);
    const [shopAssistantsSalesState, setShopAssistantsSalesState] = useState([]);
    const [shopSalesState, setShopSalesState] = useState([]);
    const [bestAssistantSaleState, setBestAssistantSaleState] = useState([]);
    const [worstAssistantSaleState, setWorstAssistantSaleState] = useState([]);

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
    useEffect(() => { callService() }, [productSales, serviceSales, productsOutOfStocks, assistantSales, products, services, assistants])

    async function callService() {
        setProductSalesState(await homeService.productSale(productSales, products));
        setTopSoldServicesState(await homeService.serviceTopSale(topSoldServices, services));
        setProductsOutOfStocksState(productsOutOfStocks);
        setShopAssistantsSalesState(await homeService.getAssistantSales(assistantSales, assistants));
        setShopSalesState(await homeService.getShopSales(shopSales, shops));
        setBestAssistantSaleState(await homeService.getBestAssistantSale(bestAssistantSale, assistants));
        setWorstAssistantSaleState(await homeService.getWorstAssistantSale(worstAssistantSale, assistants));
    }
    return (
        <div className="home-wrapper">
            <HomeCard header="Product Sales" data={productSalesState} />
            <HomeCard header="Top Sold Services" data={topSoldServicesState} />
            <HomeCard header="Products out of stock" data={productsOutOfStocksState} isStock />
            <HomeCard header="Sales for the Shop Assistant" data={shopAssistantsSalesState} />
            <HomeCard header="Sales for Shop" data={shopSalesState} />
            <HomeCard header="Best Selling Shop Assistants" data={bestAssistantSaleState} />
            <HomeCard header="Worst Selling Shop Assistants" data={worstAssistantSaleState} />
        </div>
    )
}

const mapStateToProps = ({
    productSales,
    products,
    topSoldServices,
    services,
    productsOutOfStocks,
    assistantSales,
    assistants,
    shopSales,
    shops,
    bestAssistantSale,
    worstAssistantSale
}) => ({
    productSales,
    products,
    topSoldServices,
    services,
    productsOutOfStocks,
    assistantSales,
    assistants,
    shopSales,
    shops,
    bestAssistantSale,
    worstAssistantSale
});
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);