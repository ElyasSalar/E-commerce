import React from 'react';
import {Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
export default class App extends React.Component{
    render(){
        return(
            <div>
                <Route exact path='/' component={Homepage} />
            </div>
        )
    }
}