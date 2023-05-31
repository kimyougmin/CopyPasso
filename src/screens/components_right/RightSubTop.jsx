import React, {useState} from 'react';
import "./RightSubTop.css"
import EventGoodComponent from "../../components-new/main/event-good/EventGoodComponent";


function RightSubTop(props) {
    const subTopDate = [
        {
            contentImg : "./Body/contents/carFamilyList/model_s.png",
            name : "보트",
            title : "고급 보트 팝니다 상태 매우 좋음"
        },
        {
            contentImg : "./Body/contents/rightSubTop/cycle.jpeg",
            name : "보트",
            title : "고급 보트 팝니다 상태 매우 좋음"
        },
        {
            contentImg : "./Body/contents/rightSubTop/boat.jpeg",
            name : "보트",
            title : "고급 보트 팝니다 상태 매우 좋음"
        }
    ];

    const goodsLike = [
        {
            img: "./Body/contents/rightSubTop/newhot_tab01_none.gif",
            overImg : "./Body/contents/rightSubTop/newhot_tab01_over.gif",
            item : subTopDate[0]
        },
        {
            img: "./Body/contents/rightSubTop/newhot_tab02_none.gif",
            overImg : "./Body/contents/rightSubTop/newhot_tab02_over.gif",
            item : subTopDate[1]
        },
        {
            img: "./Body/contents/rightSubTop/newhot_tab03_none.gif",
            overImg : "./Body/contents/rightSubTop/newhot_tab02_over.gif",
            item : subTopDate[2]
        }
    ];


    const [goodObject, setGoodObject] = useState(subTopDate[0]);
    const [isClick, setIsClick] = useState(0);

    const onClickEvent = (index) =>{
        setGoodObject(subTopDate[index])
        setIsClick(index)
        console.log(goodObject," index = ", index)
    }
    const onMouseOver = (isSelected) =>{

    }

    return (
        <div className={"rightSubTop"}>
            <ul>
                <li className={"rightSubTopList"}>
                    <dl>
                        <dt className={"rightLikeHotGood"}>
                            <img src={"./Body/contents/rightSubTop/newhot_title.gif"} height={15}/>
                        </dt>
                        <dd className={"rightThumb"}>
                            <img className={"thumbMain"} src={goodObject.contentImg}/>
                            <div className={"remoteSubTop"}>
                                {goodsLike.map((e, index) => {
                                    const isSelected = index === isClick;

                                    return <img
                                        key={index}
                                        src={isSelected ? e.overImg: e.img}
                                        onClick={() => {onClickEvent(index)}
                                    }
                                    />
                                })}
                            </div>
                        </dd>
                        <dd className={"rightName"}>
                            <b>{goodObject.name}</b>
                        </dd>
                        <dd className={"rightTitleEllipsis"}>
                            {goodObject.title}
                        </dd>
                    </dl>
                </li>
            </ul>
        </div>
    );
}

export default RightSubTop;