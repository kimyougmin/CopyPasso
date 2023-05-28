import React, {useEffect, useState} from 'react';
import "./BodyPopularGood.css"
import BodyPopularGoodList from "./BodyPopularGoodList";
import BodyPopularPurchase from "./BodyPopularPurchase";


function BodyPopularGood(props) {

    const testData = [{src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    ]
    const testData1 = [{src:"./Body/top/R6.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    ]
    const testData2 = [{src:"./Body/top/gsx-r125.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    ]
    const testData3 = [{src:"./Body/top/s1000rr.webp",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
        {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크", year : 2022, distance : 12000, address:"부산"},
    ]
    const testData4 = [{manufacturers:"가와사키", forSale:"z125", title :"z125 스탠다드 모델 구입 희망", address:"부산", MM: "05",day:"12"},
        {manufacturers:"가와사키", forSale:"z125", title :"z125 스탠다드 모델 구입 희망", address:"부산", MM: "05",day:"12"},
        {manufacturers:"가와사키", forSale:"z125", title :"z125 스탠다드 모델 구입 희망", address:"부산", MM: "05",day:"12"},
        {manufacturers:"가와사키", forSale:"z125", title :"z125 스탠다드 모델 구입 희망", address:"부산", MM: "05",day:"12"},
        {manufacturers:"가와사키", forSale:"z125", title :"z125 스탠다드 모델 구입 희망", address:"부산", MM: "05",day:"12"},
        {manufacturers:"가와사키", forSale:"z125", title :"z125 스탠다드 모델 구입 희망", address:"부산", MM: "05",day:"12"},
        {manufacturers:"가와사키", forSale:"z125", title :"z125 스탠다드 모델 구입 희망", address:"부산", MM: "05",day:"12"},];
    let changeImg = ["./Body/contents/main_tab_new_01_none.gif",
        "./Body/contents/main_tab_new_02_none.gif",
        "./Body/contents/main_tab_new_03_none.gif",
        "./Body/contents/main_tab_new_04_none.gif",
        "./Body/contents/main_tab_new_05_none.gif"];

    let tempImg = changeImg;

    const [img, setImg] = useState(changeImg);
    const [popularList, setPopularList] = useState(testData);
    const [listNum, setListNum] = useState(0);

    useEffect(() => {
        //호버 시 데이터 제 랜더링

    },[])

    const change0 = (event) => {
        setImg(changeImg)
        setListNum(0);
        tempImg[0] = "./Body/contents/main_tab_new_01_over.gif";
        setImg(tempImg)
        setPopularList(testData)
    }
    const change1 = (event) => {
        setImg(changeImg);
        setListNum(1);
        tempImg[1] = "./Body/contents/main_tab_new_02_over.gif";
        setImg(tempImg);
        setPopularList(testData1);
    }
    const change2 = (event) => {
        setImg(changeImg);
        setListNum(2);
        tempImg[2] = "./Body/contents/main_tab_new_03_over.gif";
        setImg(tempImg)
        setPopularList(testData2)
    }
    const change3 = (event) => {
        setImg(changeImg);
        setListNum(3);
        tempImg[3] = "./Body/contents/main_tab_new_04_over.gif";
        setImg(tempImg)
        setPopularList(testData3)
    }
    const change4 = (event) => {
        setImg(changeImg);
        setListNum(4);
        tempImg[4] = "./Body/contents/main_tab_new_05_over.gif";
        setImg(tempImg)
        setPopularList(testData4);
    }


    return (
        <div className={"bodyPopularGoods"}>
            <dl className={"typeNew"}>
                <dd className={"hand"}>
                    <img
                        src={img[0]}
                        onMouseOver = {() =>
                        {change0()}}/>
                </dd>
                <dd className={"hand"}>
                    <img src={img[1]}
                         onMouseOver = {() =>
                         {change1()}}/>
                </dd>
                <dd className={"hand"}>
                    <img src={img[2]}
                         onMouseOver = {() =>
                         {change2()}}/>
                </dd>
                <dd className={"hand"}>
                    <img src={img[3]}
                         onMouseOver = {() =>
                         {change3()}}/>
                </dd>
                <dd className={"lastHand"}>
                    <img src={img[4]}
                         onMouseOver = {() =>
                         {change4()}}/>
                </dd>
            </dl>
            <div className={"PopularList"}>
                {listNum == 4 ?
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
                    : popularList.map((data,index) => {
                        return <BodyPopularGoodList key={index} props={data}/>
                    })
                }
            </div>
        </div>
    );
}

export default BodyPopularGood;