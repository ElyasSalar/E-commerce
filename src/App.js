import React from 'react';
import ShopPage from './pages/shop/shop.component';
import {Route, Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import Header from './components/header/header.component';

export default class App extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route exact path='/shop' component={ShopPage} />
                </Switch>
            </div>
        )
    }
}