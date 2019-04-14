import React, { Component } from 'react'; 
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {routes} from './routes'


class ManageCompo extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        {this.showComponent(routes)}
                    </Switch>

                </div>
            </Router>
        );
    }
    showComponent=(routes) => {
        var result = null;
        if(routes.length > 0) 
        {
            result = routes.map((route, index) => {
                return (
                    <Route 
                    key={index}
                    path={route.path} 
                    exact={route.exact} 
                    component={route.main}/>
                );
            })
        }

        return result;
    }
}

export default ManageCompo;