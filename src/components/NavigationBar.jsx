import React from 'react';
import "./NavigationBar.css"

function NavigationBar(props) {


    return (
        <div className="navigationBar" >
            <div className="nav_Left">
                <ul>
                    <img src={'./common:top/passo_home.gif'}/>
                    <img src={'./common:top/bike_top_bookmark_none.gif'}/>
                    <img src={'./common:top/bike_top_login_none.gif'}/>
                </ul>
            </div>
            <img src={'./common:top/bike_top_bg.gif'}/>
            <div className="nav_right">
                <img src={'./common:top/bike_top_01.gif'}/>
                <img src={'./common:top/bike_top_02.gif'}/>
                <img src={'./common:top/bike_top_03.gif'}/>
                <img src={'./common:top/bike_top_04.gif'}/>
                <img src={'./common:top/bike_top_05.gif'}/>
                <img src={'./common:top/bike_top_07.gif'}/>
                <img src={'./common:top/bike_top_08.gif'}/>
                <img src={'./common:top/bike_top_09.gif'}/>
                <img src={'./common:top/bike_top_bg.gif'}/>
            </div>
        </div>
    );
}

export default NavigationBar;