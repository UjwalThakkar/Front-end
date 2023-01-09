import React from "react";
import '../App.css';

export default function Product_slider(props){
    const red = () => {
        alert("hi")
    }
    return(
        <div className="card" onClick={red} >
            <div className="img_sec">
                <img src={props.p_img}></img>
            </div>
            <hr></hr>
            <div className="text_sec">
                <h2 className="name">{props.p_name}</h2>
                <h4 className="price">${props.p_price}</h4>
            </div>
        </div>
    )
}