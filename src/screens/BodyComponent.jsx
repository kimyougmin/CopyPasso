import React from 'react';
import BodyHeader from "./components-left/BodyHeader";
import "./BodyComponent.css"
import BodyTop from "./components-left/BodyTop";
import BodySubTop from "./components-left/BodySubTop";
import BodyPopularGood from "./components-left/BodyPopularGood";
import BodyEventGoods from "./components-left/BodyEventGoods";
import BodyNewGoods from "./components-left/BodyNewGoods";
import LoginForm from "./components_right/LoginForm";
import RightSubTop from "./components_right/RightSubTop";
import RightMedia from "./components_right/RightMedia";
import RightPopularTop from "./components_right/RightPopularTop";

const BodyComponent = () => {
    return (
        <div className="AppBody">
            <BodyHeader/>
            <div style={{width:100+"%", height: 100+"%",display:"flex"}}>
                <div className={"content"} style={{display: "block", paddingRight: 14}}>
                    <BodyTop/>
                    <BodySubTop/>
                    <BodyPopularGood/>
                    <BodyEventGoods/>
                    <BodyNewGoods />
                </div>
                <div className={"right"} style={{display: "block"}}>
                    <LoginForm/>
                    <RightSubTop/>
                    <RightMedia />
                    <RightPopularTop />
                </div>
            </div>
        </div>
    );
};

export default BodyComponent;