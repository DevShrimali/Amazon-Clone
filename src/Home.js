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
            <div className="home__row">
            <Product
                id="01"
                title="SanDisk Cruzer Blade 32GB USB Flash Drive"
                price={329.00}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/61pHXsALAOL._SY355_.jpg"
            />
            <Product
                id="02"
                title="Boat Rockerz 550 Over-Ear Wireless Headphone with Ergonomic Aesthetics, Plush Padded Earcups, Immersive Audio, Bluetooth v5.0 & Upto 20H Playback (Active Black)"
                price={1,499.00}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/710XhG8bO3L._SY450_.jpg"
            />
            </div>

            <div className="home__row">
            
            <Product
                id="03"
                title="IFB 6 kg 5 Star Fully-Automatic Front Loading Washing Machine"
                price={20690.00}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/611YswQRgfL._SX569_.jpg"
            />
             <Product
                id="04"
                title="Redux Analogue Blue Dial Men’s & Boy's Watch RWS0216S"
                price={269.00}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/81BDpSIwu3L._UY550_.jpg"
            />
            <Product
                id="05"
                title="This is Holy Moly Nothing Product"
                price={11.11}
                rating={3}
                image="https://m.media-amazon.com/images/I/41DRiqGKCOL._AC_SY200_.jpg"
            />
            
            
            </div>
            <div className="home__row">
            <Product
                id="06"
                title="LG Ultragear 27-inch IPS FHD, G-Sync Compatible, HDR 10, Gaming Monitor with Display Port, HDMI x 2, Height Adjust & Pivot Stand, 144Hz, 1ms - 27GL650F (Black)"
                price={20.69900}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71ZFFvrGaAL._SX425_.jpg"
            />
            </div>
        </div>
    );
}

export default Home;
