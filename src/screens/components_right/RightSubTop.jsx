import React, {useState} from 'react';
import "./RightSubTop.css"
import EventGoodComponent from "../../components-new/main/event-good/EventGoodComponent";
const forss = [
    {
        like: "./Body/contents/rightSubTop/newhot_title.gif",
        manufacturers:"스즈키",
        img:"./Body/top/gsx-r125.jpeg",
        name:"gsx-r 125",
        title:"스즈키의 모델 gsxr125 19년식 관리 잘되어 있습니다. 연락많이 주세요"
    }
];
function RightSubTop(props) {

    const goodsLike = [
        {
            img: "./Body/contents/rightSubTop/newhot_tab01_none.gif",
            overImg : "./Body/contents/rightSubTop/newhot_tab01_over.gif",
            contentImg : "./Body/contents/rightSubTop/newhot_title.gif",
            name : "보트",
            title : "고급 보트 팝니다 상태 매우 좋음"
        },
        {
            img: "./Body/contents/rightSubTop/newhot_tab02_none.gif",
            overImg : "./Body/contents/rightSubTop/newhot_tab02_over.gif",
            contentImg : "./Body/contents/rightSubTop/cycle.jpeg",
            name : "보트",
            title : "고급 보트 팝니다 상태 매우 좋음"
        },
        {
            img: "./Body/contents/rightSubTop/newhot_tab03_none.gif",
            overImg : "./Body/contents/rightSubTop/newhot_tab02_over.gif",
            contentImg : "./Body/contents/rightSubTop/boat.jpeg",
            name : "보트",
            title : "고급 보트 팝니다 상태 매우 좋음"
        }
    ];
    const subTopDate = [
        {
            img: "./Body/contents/rightSubTop/newhot_tab01_none.gif",
            overImg : "./Body/contents/rightSubTop/newhot_tab01_over.gif",
            contentImg : "./Body/contents/rightSubTop/newhot_title.gif",
            name : "보트",
            title : "고급 보트 팝니다 상태 매우 좋음"
        },
        {
            img: "./Body/contents/rightSubTop/newhot_tab02_none.gif",
            overImg : "./Body/contents/rightSubTop/newhot_tab02_over.gif",
            contentImg : "./Body/contents/rightSubTop/cycle.jpeg",
            name : "보트",
            title : "고급 보트 팝니다 상태 매우 좋음"
        },
        {
            img: "./Body/contents/rightSubTop/newhot_tab03_none.gif",
            overImg : "./Body/contents/rightSubTop/newhot_tab02_over.gif",
            contentImg : "./Body/contents/rightSubTop/boat.jpeg",
            name : "보트",
            title : "고급 보트 팝니다 상태 매우 좋음"
        }
    ];

    const [goodObject, setGoodObject] = useState(subTopDate[0]);

    const onClickEvent = (index) =>{
        setGoodObject(subTopDate[index])
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
                            <img className={"thumbMain"} src={"./Body/top/gsx-r125.jpeg"}/>
                            <div className={"remoteSubTop"}>
                                {goodsLike.map((e, index) => {
                                    const isSelected = index === true;

                                    return <EventGoodComponent
                                            img={e.img}
                                            overImg={e.overImg}
                                    />
                                })}
                            </div>
                        </dd>
                        <dd className={"rightName"}>
                            {"스즈키/gsx-r 125"}
                        </dd>
                        <dd className={"RightTitleEllipsis"}>
                            {"스즈키의 모델 gsxr125 19년식 관리 잘되어 있습니다. 연락많이 주세요"}
                        </dd>
                    </dl>
                </li>
            </ul>
        </div>
    );
}

export default RightSubTop;