import React from "react";
import '../App.css';
import Product_slider from "./Product_slider";

export default function Main(props){
    return(
        <div className="Main">
            <div className="img_container">
                <img src={props.img}></img>
            </div>
            <div className="sideNav">
                <ul>
                    <li>Instagram</li>
                    <li>FaceBook</li>
                    <li>Twitter</li>
                </ul>
            </div>
            <div className="product_sec">
                <div className="card_container">

                    <Product_slider 
                        p_img = "../assets/pegasus-flyease-easy-on-off-road-running-shoes-RlnnC7-removebg-preview.png"
                        p_name = "nike pegasus"
                        p_price = "160"
                    />
                    <Product_slider 
                        p_img = "../assets/flex-experience-run-11-next-nature-road-running-shoes-rB6h46-removebg-preview.png"
                        p_name = "nike flex"
                        p_price = "180"
                    />
                </div>
            </div>
        </div>
    )
}