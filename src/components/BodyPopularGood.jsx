import React, {useEffect, useState} from 'react';
import "./BodyPopularGood.css"
import BodyPopularGoodList from "./BodyPopularGoodList";
import BodyPopularPurchase from "./BodyPopularPurchase";
import {TabHeaderComponent} from "../components-new/main/popular-good/TabHeaderComponent";

const testData = [
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
];

const testData1 = [
    {src:"./Body/top/R6.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
];

const testData2 = [
    {src:"./Body/top/gsx-r125.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
];

const testData3 = [
    {src:"./Body/top/s1000rr.webp",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
];

const testData4 = [
    {manufacturers:"가와사키", forSale:"z125", title :"z125 스탠다드 모델 구입 희망", address:"부산", MM: "05",day:"12"},
    {manufacturers:"가와사키", forSale:"z125", title :"z125 스탠다드 모델 구입 희망", address:"부산", MM: "05",day:"12"},
    {manufacturers:"가와사키", forSale:"z125", title :"z125 스탠다드 모델 구입 희망", address:"부산", MM: "05",day:"12"},
    {manufacturers:"가와사키", forSale:"z125", title :"z125 스탠다드 모델 구입 희망", address:"부산", MM: "05",day:"12"},
    {manufacturers:"가와사키", forSale:"z125", title :"z125 스탠다드 모델 구입 희망", address:"부산", MM: "05",day:"12"},
    {manufacturers:"가와사키", forSale:"z125", title :"z125 스탠다드 모델 구입 희망", address:"부산", MM: "05",day:"12"},
    {manufacturers:"가와사키", forSale:"z125", title :"z125 스탠다드 모델 구입 희망", address:"부산", MM: "05",day:"12"}
];

function BodyPopularGood(props) {
    const headers = [
        {
            img: './Body/contents/main_tab_new_01_none.gif',
            imgOver: './Body/contents/main_tab_new_01_over.gif',
            items: testData,
        },
        {
            img: './Body/contents/main_tab_new_02_none.gif',
            imgOver: './Body/contents/main_tab_new_02_over.gif',
            items: testData1,
        },
        {
            img: './Body/contents/main_tab_new_03_none.gif',
            imgOver: './Body/contents/main_tab_new_03_over.gif',
            items: testData2,
        },
        {
            img: './Body/contents/main_tab_new_04_none.gif',
            imgOver: './Body/contents/main_tab_new_04_over.gif',
            items: testData3,
        },
        {
            img: './Body/contents/main_tab_new_05_none.gif',
            imgOver: './Body/contents/main_tab_new_05_over.gif',
            items: testData4,
        },

    ];

    const [popularList, setPopularList] = useState(testData);
    const [listNum, setListNum] = useState(0);


    // useEffect(() => {
    //     //호버 시 데이터 제 랜더링
    //
    // },[])

    const renderTab = () => {
        if (listNum === 4) {
            return null;
        }

        return popularList.map((data,index) => {
            return <BodyPopularGoodList key={index} props={data}/>
        })
    };

    const renderTab4 = () => {
        if (listNum !== 4) {
            return null;
        }

        return (
            <div className={"purchaseList"}>
                <div className={"from"}>
                    <div className={"fromHeader"}>
                        <b style={{marginLeft : "40px"}}>희망 매물</b>
                        <b>제목</b>
                        <div style={{display: "flex", marginRight : "30px"}}>
                            <b style={{marginRight : "20px"}}>지역</b>
                            <b>등록일</b>
                        </div>
                    </div>
                    {popularList.map((data, index) => {
                        return <BodyPopularPurchase key={index} props={data}/>
                    })}
                </div>

            </div>
        );
    };


    return (
        <div className={"bodyPopularGoods"}>
            <dl className={"typeNew"}>
                {headers.map((e, index) => {
                    const isLast = index === headers.length - 1;
                    const className = isLast ? 'lastHand' : 'hand';
                    const isSelected = listNum === index;
                    return (
                        <TabHeaderComponent
                            className={className}
                            img={e.img}
                            imgOver={e.imgOver}
                            isSelected={isSelected}
                            onMouseOver={() => {
                                setListNum(index);
                                setPopularList(e.items);
                            }}/>
                    );

                })}
            </dl>
            <div className={"PopularList"}>
                {renderTab()}
                {renderTab4()}
            </div>
        </div>
    );
}

export default BodyPopularGood;