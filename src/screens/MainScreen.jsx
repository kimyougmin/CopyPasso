import React from 'react';
import NavigationBar from "../components/NavigationBar";
import BodyComponent from "../components/BodyComponent";
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