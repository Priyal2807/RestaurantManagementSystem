import React from 'react'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <nav className="nav-div">
                <a className="brand-logo"><Link to="/">RMS</Link></a>
                <ul className="right">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                </ul>
        </nav>
    )
}
export default Header;