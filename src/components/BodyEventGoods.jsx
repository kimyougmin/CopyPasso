import React, {useState} from 'react';
import "./BodyEventGoods.css";


function BodyEventGoods(props) {

    const [position, setPosition] = useState(300);

    return (
        <div className={"eventGoods"}>
            <div className={"eventButton"}>
                <img src={"./Body/contents/eventgoods/bike_shop_tab01_none.gif"}/>
                <img src={"./Body/contents/eventgoods/bike_shop_tab02_none.gif"}/>
                <img src={"./Body/contents/eventgoods/bike_shop_tab03_none.gif"}/>
            </div>
            <div className={"eventContent"}>
                <img src={"./Body/contents/eventgoods/goatskin_s_banner.jpg"}/>
                <div className={"eventBody"}>
                    <div className={"imgList"}>
                        <ul style={{marginLeft : `${position}px`}}>
                            <li>
                                <img src={"./Body/contents/eventgoods/bworld_list_banner.jpg"}/>
                            </li>
                            <li>
                                <img src={"./Body/contents/eventgoods/hjcnew_list_banner.jpg"}/>
                            </li>
                            <li>
                                <img src={"./Body/contents/eventgoods/riderj_list_banner.jpg"}/>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BodyEventGoods;