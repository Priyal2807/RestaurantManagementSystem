import React, { Component } from 'react';
const Content = () => {
    return (
        <div className="row">
            <div className="col s6 mycol">
                <img src={require("./res.jpeg")} id="myimg" />
            </div>
            <div className="col s6 mycol">
            <div className="card">
                <div className="cardContent">
                        HELLO <br/> WELCOME TO OUR RESTAURANT
                </div>
            </div>
            </div>
            
        </div>
     )
}
export default Content;