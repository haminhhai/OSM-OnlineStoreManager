import React, { Component } from 'react'; 
import Signinup from './routes/signin-up/Signin-up.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const routes = [
    {
        path: '/',
        exact: 'true',
        main: () => <Signinup />
    }    
]
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