import React from "react";


export default function Test(porps){
    console.log(porps);
    return (
        <>
            <h1>Hello world</h1>
            <img src={porps.img}></img>
        </>
    )
}