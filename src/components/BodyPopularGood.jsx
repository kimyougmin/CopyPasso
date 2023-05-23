import React, {useEffect} from 'react';
import "./BodyPopularGood.css"

function BodyPopularGood(props) {

    const testData = {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"}
    useEffect(()=>{
        //호버 시 데이터 제 랜더링
    },[])

    return (
        <div>
            <dl className={"typeNew"}>
                <dd className={"hand"}>
                    <img src={"./Body/contents/main_tab_new_01_none.gif"}/>
                </dd>
                <dd className={"hand"}>
                    <img src={"./Body/contents/main_tab_new_02_none.gif"}/>
                </dd>
                <dd className={"hand"}>
                    <img src={"./Body/contents/main_tab_new_03_none.gif"}/>
                </dd>
                <dd className={"hand"}>
                    <img src={"./Body/contents/main_tab_new_04_none.gif"}/>
                </dd>
                <dd className={"lastHand"}>
                    <img src={"./Body/contents/main_tab_new_05_none.gif"}/>
                </dd>
            </dl>
            <div className={"PopularList"}>
                <ul>
                    <li className={"P_ListLi"}>
                        <dl>
                            <dt>
                                <img src={testData.src}/>
                            </dt>
                            <dd>
                                <b>{testData.manufacturers}/{testData.title.substring(0,8).padEnd(1,".")}</b>
                            </dd>
                            <div>
                                <dd>
                                    {testData.year}년
                                </dd>
                                <dd>
                                    |
                                </dd>
                                <dd>
                                    {testData.distance}km
                                </dd>
                                <dd>
                                    |
                                </dd>
                                <dd>
                                    {testData.address}
                                </dd>
                            </div>
                        </dl>
                    </li>
                </ul>
                <ul>
                    <li className={"P_ListLi"}>
                        <dl>
                            <dt>
                                <img src={testData.src}/>
                            </dt>
                            <dd>
                                <b>{testData.manufacturers}/{testData.title.substring(0,8).padEnd(1,".")}</b>
                            </dd>
                            <div>
                                <dd>
                                    {testData.year}년
                                </dd>
                                <dd>
                                    |
                                </dd>
                                <dd>
                                    {testData.distance}km
                                </dd>
                                <dd>
                                    |
                                </dd>
                                <dd>
                                    {testData.address}
                                </dd>
                            </div>
                        </dl>
                    </li>
                </ul>
                <ul>
                    <li className={"P_ListLi"}>
                        <dl>
                            <dt>
                                <img src={testData.src}/>
                            </dt>
                            <dd>
                                <b>{testData.manufacturers}/{testData.title.substring(0,8).padEnd(1,".")}</b>
                            </dd>
                            <div>
                                <dd>
                                    {testData.year}년
                                </dd>
                                <dd>
                                    |
                                </dd>
                                <dd>
                                    {testData.distance}km
                                </dd>
                                <dd>
                                    |
                                </dd>
                                <dd>
                                    {testData.address}
                                </dd>
                            </div>
                        </dl>
                    </li>
                </ul>

                <ul>
                    <li className={"P_ListLi"}>
                        <dl>
                            <dt>
                                <img src={testData.src}/>
                            </dt>
                            <dd>
                                <b>{testData.manufacturers}/{testData.title.substring(0,8).padEnd(1,".")}</b>
                            </dd>
                            <div>
                                <dd>
                                    {testData.year}년
                                </dd>
                                <dd>
                                    |
                                </dd>
                                <dd>
                                    {testData.distance}km
                                </dd>
                                <dd>
                                    |
                                </dd>
                                <dd>
                                    {testData.address}
                                </dd>
                            </div>
                        </dl>
                    </li>
                </ul>
                <ul>
                    <li className={"P_ListLi"}>
                        <dl>
                            <dt>
                                <img src={testData.src}/>
                            </dt>
                            <dd>
                                <b>{testData.manufacturers}/{testData.title.substring(0,8).padEnd(1,".")}</b>
                            </dd>
                            <div>
                                <dd>
                                    {testData.year}년
                                </dd>
                                <dd>
                                    |
                                </dd>
                                <dd>
                                    {testData.distance}km
                                </dd>
                                <dd>
                                    |
                                </dd>
                                <dd>
                                    {testData.address}
                                </dd>
                            </div>
                        </dl>
                    </li>
                </ul>
                <ul>
                    <li className={"P_ListLi"}>
                        <dl>
                            <dt>
                                <img src={testData.src}/>
                            </dt>
                            <dd>
                                <b>{testData.manufacturers}/{testData.title.substring(0,8).padEnd(1,".")}</b>
                            </dd>
                            <div>
                                <dd>
                                    {testData.year}년
                                </dd>
                                <dd>
                                    |
                                </dd>
                                <dd>
                                    {testData.distance}km
                                </dd>
                                <dd>
                                    |
                                </dd>
                                <dd>
                                    {testData.address}
                                </dd>
                            </div>
                        </dl>
                    </li>
                </ul>
                <ul>
                    <li className={"P_ListLi"}>
                        <dl>
                            <dt>
                                <img src={testData.src}/>
                            </dt>
                            <dd>
                                <b>{testData.manufacturers}/{testData.title.substring(0,8).padEnd(1,".")}</b>
                            </dd>
                            <div>
                                <dd>
                                    {testData.year}년
                                </dd>
                                <dd>
                                    |
                                </dd>
                                <dd>
                                    {testData.distance}km
                                </dd>
                                <dd>
                                    |
                                </dd>
                                <dd>
                                    {testData.address}
                                </dd>
                            </div>
                        </dl>
                    </li>
                </ul>
                <ul>
                    <li className={"P_ListLi"}>
                        <dl>
                            <dt>
                                <img src={testData.src}/>
                            </dt>
                            <dd>
                                <b>{testData.manufacturers}/{testData.title.substring(0,8).padEnd(1,".")}</b>
                            </dd>
                            <div>
                                <dd>
                                    {testData.year}년
                                </dd>
                                <dd>
                                    |
                                </dd>
                                <dd>
                                    {testData.distance}km
                                </dd>
                                <dd>
                                    |
                                </dd>
                                <dd>
                                    {testData.address}
                                </dd>
                            </div>
                        </dl>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BodyPopularGood;