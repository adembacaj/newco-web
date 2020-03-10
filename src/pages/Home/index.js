import React from 'react';
import {connect} from 'react-redux';

function Home(props){
    return (
        <div>
            Home
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Home);