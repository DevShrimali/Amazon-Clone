import React from 'react'
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img  className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWPhase1/5_DesktopHero_Unrec_150x600-._CB419216629_.jpg"
            alt=""
            />
            {/* Product id, title, price, rating, image */}
            <Product
                id="4658678731"
                title="This is Holy Moly Nothing Product"
                price={11.11}
                rating={3}
                image="https://m.media-amazon.com/images/I/41DRiqGKCOL._AC_SY200_.jpg"
            />
        </div>
    );
}

export default Home;
