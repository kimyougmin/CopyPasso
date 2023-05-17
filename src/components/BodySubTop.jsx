import React, {useEffect, useState} from 'react';
import "./BodySubTop.css"

function BodySubTop(props) {

    const [forSale, setForSale] = useState({manufacturers:"스즈키", name:"gsx-r 125", title:"스즈키의 모델 gsxr125 19년식 관리 잘되어 있습니다. 연락많이 주세요"});

    useEffect(() => {
    // hot매물, 명품 매물, 신차급 매물 리스트 받아와서 출력 map ->
    }, [])

    return (
        <div className={"subTop"}>
            <ul>
                <li className={"subTopList"}>
                    <dl>
                        <dt className={"hotGood"}>
                            <img src={"./Body/contents/bike_title1.gif"} height={15}/>
                        </dt>
                        <dd className={"thumb"}>
                            <img src={"./Body/top/gsx-r125.jpeg"}/>
                        </dd>
                        <dd className={"name"}>
                            {forSale.manufacturers+"/"+forSale.name}
                        </dd>
                        <dd className={"titleEllipsis"}>
                            {forSale.title.substring(0,20)}
                        </dd>
                    </dl>
                </li>
            </ul>
        </div>
    );
}

export default BodySubTop;