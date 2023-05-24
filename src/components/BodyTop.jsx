import React, {useEffect, useState} from 'react';
import "./BodyTop.css"
import BodyTopRight from "./BodyTopRight";

const BodyTop = () => {
    const user = {name:"무면라이더", title:"무면어택", content :"무척이나 춥던 겨울날의 일요일.그래도 달려야죠!겨울엔 바다. 남해군으로 달려가기로 합니다.오늘은 꽤 추운 날씨때문인지 온로드존 료코즈키님만 나오셨네요.그렇게 남해로 출발!!주행 경로가 궁금하신 분들은 본 " +
            "글 가장 하단에 지도영상을 첨부하였으니 참고해주세요!남해군 까지는 국도를 타고..."}
    const [data, setData] = useState(user);
    // fetch를 이용해 데이터 가지고 오는 부분
    useEffect(() => {

    }, [])

    return (
        <div className={"top"}>
            <div className={"hub"}>
                <ul>
                    <div className={"bLeft"}>
                        <li className={"title"}>
                            <img src={'./Body/top/hub_title.gif'}/>
                        </li>
                        <li className={"thumb"}>
                            <img src={'./Body/top/gsx-r125.jpeg'}/>
                        </li>
                    </div>
                    <div className={"bRight"}>
                        <li className={"name"}>{data.name}</li>
                        <li className={"content_title"}>{data.title}</li>
                        <li className={"content"}>{data.content.substring(0, 30).padEnd(4,".")}</li>
                    </div>
                </ul>
            </div>
            <BodyTopRight/>
        </div>
    );
};

export default BodyTop;