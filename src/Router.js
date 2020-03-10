import React from 'react';
import { Router as BaseRouter, Route, Switch, Redirect } from 'react-router-dom';
import history from './history';

//pages
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Shops from './pages/Shops';

function Router() {
    return (
        <BaseRouter history={history}>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/products' exact component={Products} />
                <Route path='/services' exact component={Services} />
                <Route path='/shops' exact component={Shops} />
            </Switch>
        </BaseRouter>)
}

export default Router;