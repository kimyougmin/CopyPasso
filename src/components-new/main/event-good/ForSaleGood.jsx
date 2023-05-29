import React from 'react';

function ForSaleGood(props) {
    const {
        title,
        price,
    } = props;


    return (
        <div className={"forSaleGoodList"}>
            <li>
                {title}
            </li>
            <li className={"noneLi"}>
                {price}원
            </li>
        </div>
    );
}

export default ForSaleGood;