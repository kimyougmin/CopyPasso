import React, {useState} from 'react';
import "./RightSubTop.css"

function RightSubTop(props) {
    const forss = [
        {
            like: "./Body/contents/rightSubTop/newhot_title.gif",
            manufacturers:"스즈키",
            img:"./Body/top/gsx-r125.jpeg",
            name:"gsx-r 125",
            title:"스즈키의 모델 gsxr125 19년식 관리 잘되어 있습니다. 연락많이 주세요"
        }
    ];

    const [fors, setFors] = useState(forss)
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
                                <img src={"./Body/contents/rightSubTop/newhot_tab01_none.gif"}/>
                                <img src={"./Body/contents/rightSubTop/newhot_tab02_none.gif"}/>
                                <img src={"./Body/contents/rightSubTop/newhot_tab03_none.gif"}/>
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