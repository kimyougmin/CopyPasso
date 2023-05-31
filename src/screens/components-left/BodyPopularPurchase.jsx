import React from 'react';
import "./BodyPopularPurchase.css"

function BodyPopularPurchase(props) {

    return (
        <div className={"bodyPopularPurchase"}>
            <div className={"fromHeader"}>
                <b style={{marginLeft : "40px"}}>{props.props.manufacturers}/{props.props.forSale}</b>
                <b>{props.props.title}</b>
                <div style={{display: "flex", marginRight : "30px"}}>
                    <b style={{marginRight : "20px"}}> {props.props.address}</b>
                    <b>{props.props.MM}-{props.props.day}</b>
                </div>
            </div>
        </div>
    );
}

export default BodyPopularPurchase;