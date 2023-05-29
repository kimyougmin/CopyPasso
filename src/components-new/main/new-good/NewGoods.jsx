import React from 'react';

function NewGoods(props) {
    const {
        img,
        title,
        manufacturers,
        className
    } = props;

    return (
        <div className={className}>
            <img src={img}/>
            <b>{manufacturers}/{title}</b>
        </div>
    );
}

export default NewGoods;