import React from 'react'
import '../styles/layout.css'
import routes from './constans/routepage'
import {Route} from 'react-router-dom'

class Content extends React.Component {
    render() {
        var component = ''
        var exact = ''
        const {match} = this.props
        const name = match.params.name
        console.log(match)
        for(var i=0;i<routes.length;i++)
            if(name === routes[i].name)
                {
                    component = routes[i].component
                    exact = routes[i].exact
                }
        return (
            <div>
                <Route path={'/:id/:name'} exact={exact} component={component}/>
            </div>
        );
    }
}
export default Content