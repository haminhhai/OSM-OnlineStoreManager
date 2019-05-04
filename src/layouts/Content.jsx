import React from 'react'
import '../styles/layout.css'
import routes from './constans/routepage'
import {Route, Redirect} from 'react-router-dom'

class Content extends React.Component {
    render() {
        var component = ''
        var exact = ''
        const {match} = this.props
        const name = match.params.name
        var count = 0
        for(var i=0;i<routes.length;i++)
            if(name === routes[i].name)
                {
                    count = Number(count) + 1
                    component = routes[i].component
                    exact = routes[i].exact
                }
        if(count !== 1)
                return <Redirect to={`/404`} />
        return (
            <div>
                <Route path={'/:id/:name'} exact={exact} component={component}/>
            </div>
        );
    }
}
export default Content