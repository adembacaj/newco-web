import React from 'react';
import { connect } from 'react-redux';
import Router from './Router';
import axios from 'axios';
import config from './config';

function App(props) {
  axios.defaults.baseURL = config.baseURL;
  return (
    <>
      <Router />
    </>
  );
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(App);
