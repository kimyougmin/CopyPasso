import React from 'react';
import BodyHeader from "./BodyHeader";
import "./BodyComponent.css"
import BodyTop from "./BodyTop";
import BodySubTop from "./BodySubTop";
import BodyPopularGood from "./BodyPopularGood";
import BodyEventGoods from "./BodyEventGoods";
import BodyNewGoods from "./BodyNewGoods";

const BodyComponent = () => {
    return (
        <div className="AppBody">
            <BodyHeader/>
            <div className={"content"}>
                <BodyTop/>
                <BodySubTop/>
                <BodyPopularGood/>
                <BodyEventGoods/>
                <BodyNewGoods />
            </div>
            <div className={"right"}>

            </div>
        </div>
    );
};

export default BodyComponent;