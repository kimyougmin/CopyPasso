import React from 'react';

const EventGoodComponent = (props) => {
    const {
        isSelected,
        img,
        imgOver,
        onMouseOver
    } = props;


    return (
        <img src={isSelected ? imgOver : img}
             onMouseOver={onMouseOver}
        />
    );
}

export default EventGoodComponent;