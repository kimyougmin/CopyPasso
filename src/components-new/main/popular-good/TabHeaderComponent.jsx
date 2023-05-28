import React from 'react';

export const TabHeaderComponent = (props) => {
    const {
        className,
        isSelected,
        img,
        imgOver,
        onMouseOver,
    } = props;

    return (
        <dd className={className}>
            <img
                src={isSelected ? imgOver : img}
                onMouseOver={onMouseOver}
                // onMouseOver={() => {
                //     setImg(changeImg)
                //     setListNum(index);
                //     // tempImg[0] = "./Body/contents/main_tab_new_01_over.gif";
                //     setImg(tempImg)
                //     setPopularList(testData)
                // }}
            />
        </dd>
    );
}

