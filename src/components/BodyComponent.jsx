import React from 'react';
import BodyHeader from "./BodyHeader";
import "./BodyComponent.css"
import BodyTop from "./BodyTop";
import BodySubTop from "./BodySubTop";
import BodyPopularGood from "./BodyPopularGood";

const BodyComponent = () => {
    return (
        <div className="AppBody">
            <BodyHeader/>
            <div className={"content"}>
                <BodyTop/>
                <BodySubTop/>
                <BodyPopularGood/>
            </div>
            <div className={"right"}>

            </div>
        </div>
    );
};

export default BodyComponent;