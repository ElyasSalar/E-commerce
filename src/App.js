import React from 'react';
import ShopPage from './pages/shop/shop.component';
import {Route, Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-sign-up.component';
import {auth} from './firebase/firebase.util';

export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            currentUser: null
        }
    }
    unsubscribeFromAuth = null;
    componentDidMount(){
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});
        });
    }
    componentWillUnmount(){
        this.unsubscribeFromAuth();
        console.log('removed')
    }
    render(){
        return(
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route exact path='/shop' component={ShopPage} />
                    <Route exact path='/sign' component={SignInAndSignUpPage} />
                </Switch>
            </div>
        )
    }
}