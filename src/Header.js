import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';


function Header() {
    return (
        <nav className="header">
        <Link to="/login">
            <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
        </Link>
            {/* logo on the left */}
        <div className="header__search">
            <input type="text" className="header__serachInput"/>   
            <SearchIcon className="header__searchIcon"/>
        </div>
            {/* Search */}
            {/* 3 links */}
            {/* Basket icon with number */}
       </nav>
    )
}

export default Header
