import React, {useState} from 'react';
import "./BodyEventGoods.css";
import EventGoodsComponent from "../components-new/main/event-good/EventGoodComponent";


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
                setLeft(41)
            }else if(left === 41){
                setSliderCheck(2)
                setLeft(15)
            }else{
                setSliderCheck(0)
                setLeft(70)
            }
        }, 5000)

        return <div className={"slider"} style={{marginLeft : left+"%"}}>
            {eventGood.map((e, index) => {
                const isSelected = index === sliderCheck;
                console.log(e, isSelected);
                if(isSelected){
                    return <img src={e.img}/>
                }else{
                   return <img style={{opacity : 0.5, width:60+"%", height: 100+"%"}} src={e.img}/>
                }

            })
            }
        </div>

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
            <div className={"eventContent"}>
                <img src={"./Body/contents/eventgoods/goatskin_s_banner.jpg"}/>
                {slider()}
            </div>
        </div>
    );
}

export default BodyEventGoods;