import React from 'react';
import {connect} from 'react-redux';
import HomeCard from '../../components/HomeCard';
import './home.scss'

function Home(props){
    return (
        <div className="home-wrapper">
            <HomeCard header="Top Sold Services" body="Blank Card" />
            <HomeCard header="Products out of stock" body="Blank Card" />
            <HomeCard header="Best Selling Shop Assistants" body="Blank Card" />
            <HomeCard header="Worst Selling Shop Assistants" body="Blank Card" />
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Home);