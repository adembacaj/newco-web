import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import HomeCard from '../../components/HomeCard';
import './home.scss'
import { getProductSales, getProductsOutOfStocks } from '../../store/actions/products.actions';
import {getTopSoldServices} from '../../store/actions/services.actions';
import { getAssistantSales } from '../../store/actions/assistants.actions';

function Home(props) {
    useEffect(() => {
        props.getProductSales();
        props.getTopSoldServices();
        props.getProductsOutOfStocks();
        props.getAssistantSales();
    }, [])
    useEffect(() => {
        console.log('productSales', props.productSales)
        console.log('topSoldServices', props.topSoldServices)
        console.log('productsOutOfStocks', props.productsOutOfStocks)
        console.log('assistantSales', props.assistantSales)
    }, [props.productSales, props.serviceSales, props.productsOutOfStocks, props.assistantSales])
    return (
        <div className="home-wrapper">
            <HomeCard header="Product Sales" body="Blank Card" />
            <HomeCard header="Top Sold Services" body="Blank Card" />
            <HomeCard header="Products out of stock" body="Blank Card" />
            <HomeCard header="Sales for the Shop Assistant" body="Blank Card" />
            <HomeCard header="Sales for Shop" body="Blank Card" />
            <HomeCard header="Best Selling Shop Assistants" body="Blank Card" />
            <HomeCard header="Worst Selling Shop Assistants" body="Blank Card" />
        </div>
    )
}

const mapStateToProps = ({ productSales, topSoldServices, productsOutOfStocks, assistantSales }) => ({ productSales, topSoldServices, productsOutOfStocks, assistantSales });
const mapDispatchToProps = { getProductSales, getTopSoldServices, getProductsOutOfStocks, getAssistantSales };

export default connect(mapStateToProps, mapDispatchToProps)(Home);