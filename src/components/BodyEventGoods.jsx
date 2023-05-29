import React, {useState} from 'react';
import "./BodyEventGoods.css";
import EventGoodsComponent from "../components-new/main/event-good/EventGoodComponent";
import ForSaleGood from "../components-new/main/event-good/ForSaleGood";

const forSaleGoodList = [
    {
        title : "앱솔 블루투스 이어폰1",
        price : "170000"
    },
    {
        title : "앱솔 블루투스 이어폰2",
        price : "170000"
    },
    {
        title : "앱솔 블루투스 이어폰3",
        price : "170000"
    },
    {
        title : "앱솔 블루투스 이어폰4",
        price : "170000"
    },
    {
        title : "앱솔 블루투스 이어폰5",
        price : "170000"
    },
    {
        title : "앱솔 블루투스 이어폰5",
        price : "170000"
    },
];

function BodyEventGoods(props) {
    const headers = [
        {
            img : "./Body/contents/eventgoods/bike_shop_tab01_none.gif",
            imgOver : "./Body/contents/eventgoods/bike_shop_tab01_Over.gif"
        },
        {
            img : "./Body/contents/eventgoods/bike_shop_tab02_none.gif",
            imgOver : "./Body/contents/eventgoods/bike_shop_tab02_Over.gif"
        },
        {
            img : "./Body/contents/eventgoods/bike_shop_tab03_none.gif",
            imgOver : "./Body/contents/eventgoods/bike_shop_tab03_Over.gif"
        },
    ];

    const eventGood = [
        {
            img : "./Body/contents/eventgoods/bworld_list_banner.jpg"
        },
        {
            img : "./Body/contents/eventgoods/hjcnew_list_banner.jpg"
        },
        {
            img : "./Body/contents/eventgoods/riderj_list_banner.jpg"
        }
    ]
    const [sliderCheck, setSliderCheck] = useState(0);
    const [left, setLeft] = useState(70);
    const [listNum, setListNum] = useState(0);



    const slider = () => {
        setTimeout(() => {
            if(left === 70){
                setSliderCheck(1)
                setLeft(48)
            }else if(left === 48){
                setSliderCheck(2)
                setLeft(25)
            }else{
                setSliderCheck(0)
                setLeft(70)
            }
        }, 5000)

        return <div className={"slider"} style={{marginLeft : left+"%"}}>
            {eventGood.map((e, index) => {
                const isSelected = index === sliderCheck;
                if(isSelected){
                    return <img src={e.img}/>
                }else{
                   return <img style={{opacity : 0.5, width:60+"%", height: 100+"%"}} src={e.img}/>
                }

            })
            }
        </div>

    }

    const eventContent = () =>{
        if(listNum === 0){
            return <div className={"eventContent"}>
                <img src={"./Body/contents/eventgoods/goatskin_s_banner.jpg"}/>
                {slider()}
            </div>
        }
        return null
    }

    const suggestionGood = () =>{
        if(listNum === 1){
            return <div className={"suggestionGood"}>
                <img src={"./Body/contents/eventgoods/main_event_h_direct.png"}/>
            </div>
        }
        return null
    }

    const forSaleGood = () =>{
        if(listNum === 2){
            return <div className={"forSaleGood"}>
                {forSaleGoodList.map((e, index) => {
                    return <ForSaleGood
                        title={e.title}
                        price={e.price}
                        key={index}/>
                })
                }
            </div>
        }
        return null
    }


    return (
        <div className={"eventGoods"}>
            <div className={"eventButton"}>
                {headers.map((e, index) => {
                  const isSelected = index === listNum;
                    return <EventGoodsComponent
                        img={e.img}
                        imgOver={e.imgOver}
                        isSelected = {isSelected}
                        onMouseOver={() => {
                            setListNum(index)
                        }}
                    />
                })
                }
            </div>
            {eventContent()}
            {suggestionGood()}
            {forSaleGood()}
        </div>
    );
}

export default BodyEventGoods;