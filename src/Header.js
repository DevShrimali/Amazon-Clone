import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';


function Header() {
    return (
        <nav className="header">
         {/* logo on the left */}
            <Link to="/">
                <img className="header__logo" src="https://jitsvinger.co.za/wp-content/uploads/2018/04/Amazon-Logo-1024x373.png" alt=""/>
            </Link>
         {/* Search */}
           <div className="header__search">
                <input type="text" className="header__serachInput"/>   
                <SearchIcon className="header__searchIcon"/>
            </div>

         {/* 3 links */}
            <div className="header__nav">

            </div>
            {/* Basket icon with number */}
       </nav>
    )
}

export default Header
