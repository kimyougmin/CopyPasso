import React from 'react';
import BodyHeader from "./BodyHeader";
import "./BodyComponent.css"
import BodyTop from "./BodyTop";
import BodySubTop from "./BodySubTop";

const BodyComponent = () => {
    return (
        <div className="AppBody">
            <div className={"content"}>
                <BodyHeader/>
                <BodyTop/>
                <BodySubTop/>
            </div>
            <div className={"right"}>

            </div>
        </div>
    );
};

export default BodyComponent;