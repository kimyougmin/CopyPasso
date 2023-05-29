import React from 'react';

function NewGoods(props) {
    const {
        img,
        title,
        manufacturers
    } = props;

    return (
        <div className={"newGoods"}>
            <img src={img}/>
            <b>{manufacturers}/{title}</b>
        </div>
    );
}

export default NewGoods;