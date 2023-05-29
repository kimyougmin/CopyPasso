import React from 'react';
import "./BodyHeader.css"

const BodyHeader = () => {



    return (
        <div className={"bodyHeader"}>
            <div className={"fleft"}>
                <img src={'./top/passo_main.gif'}/>
            </div>
            <div className={"fright"}>
                <img src={"./top/top_r_banner_gjtaxitour.jpg"}/>
            </div>
            <div className={"sub_nav"}>
                <div className={"both"}>
                    <img src={"./top/menu_01_new_none.gif"} style={{marginRight:'7px'}}/>
                    <img src={"./top/menu_02_new_none.gif"} style={{marginRight:'4px'}}/>
                    <img src={"./top/menu_03_new_none.gif"} style={{marginRight:'2px'}}/>
                    <img src={"./top/menu_04_new_none.gif"} style={{marginRight:'2px'}}/>
                    <img src={"./top/menu_05_new_none.gif"} style={{marginRight:'2px'}}/>
                    <img src={"./top/menu_06_new_none.gif"} style={{marginRight:'2px'}}/>
                    <img src={"./top/menu_07_new_none.gif"} style={{marginRight:'2px'}}/>
                    <img src={"./top/menu_08_new_none.gif"} style={{marginRight:'2px'}}/>
                    <img src={"./top/menu_09_new_none.gif"} style={{paddingRight:'100px'}}/>
                    <div className={"bg"}/>
                    <img src={"./top/menu_011_new_none.gif"} className={"oivine"}/>
                    <img src={"./top/menu_010_new_none.gif"} className={"trvel"}/>
                </div>
            </div>
        </div>
    );
};

export default BodyHeader;