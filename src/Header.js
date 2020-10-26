import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { BackspaceTwoTone } from '@material-ui/icons';
import { useStateValue } from './StateProvider';



function Header() {
    const [{ basket }] = useStateValue();

    console.log(basket);

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
                <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Dev</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                </Link>
            </div>
        {/* 2 links */}
        <div className="header__nav">
                <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Order</span>
                </div>
                </Link>
            </div>
         {/* 1 links */}
         <div className="header__nav">
                <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                </Link>
            </div>
         
        {/* Basket icon with number */}
        <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
                {/*Shopping Basket icon  */}
                <ShoppingCartIcon/>
                {/* Number of items in the basket */}
                <span className="header__optionLineTwo header__optionBasketCount">{basket?.length}</span>

            </div>
        </Link>
       </nav>
    )
}

export default Header
