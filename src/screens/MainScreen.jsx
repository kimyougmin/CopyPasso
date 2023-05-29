import React from 'react';
import NavigationBar from "./components-left/NavigationBar";
import BodyComponent from "./BodyComponent";
import "./mainScreen.css"

function MainScreen(props) {
    return (
        <div className={"mainScreen"}>
            <NavigationBar/>
            <BodyComponent/>
        </div>
    );
}

export default MainScreen;