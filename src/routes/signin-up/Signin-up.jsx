import React from 'react'
import '../../styles/style.css'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { Link } from 'react-router-dom'
import Pic from '../../assets/images/city.png'



class Signinup extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <img src={Pic} alt=''/>
                <Link to='/'>
                    <div className='white-logo'>
                        <div className='white-osm-logo' />
                    </div>
                </Link>
                <div className="cont">
                    <SignIn />
                    <SignUp />
                    
                </div>
                <ul className="bg-bubbles">
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                </ul>
                
            </div>
        );
    }
}
export default Signinup;
