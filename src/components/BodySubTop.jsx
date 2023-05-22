import React, {useEffect, useState} from 'react';
import "./BodySubTop.css"
import BodySubTopContent from "./BodySubTopContent";

function BodySubTop(props) {
    const fors = [{key:"hot",like: "./Body/contents/bike_title1.gif", manufacturers:"스즈키",img:"./Body/top/gsx-r125.jpeg", name:"gsx-r 125", title:"스즈키의 모델 gsxr125 19년식 관리 잘되어 있습니다. 연락많이 주세요"},
        {key:"expen",like: "./Body/contents/bike_title2.gif", manufacturers:"야마하",img:"./Body/top/R6.jpeg", name:"R6", title:"야마하 명차 R6입니다. 연락주세여"},
    {key:"new",like: "./Body/contents/bike_title3.gif", manufacturers:"두카티",img:"./Body/top/v4.jpeg", name:"파니갈레 v4", title:"1000CC의 고배기 고급 바이크 연락 많이 주세요"}]
    const [forSale, setForSale] = useState();

    useEffect(() => {
    // hot매물, 명품 매물, 신차급 매물 리스트 받아와서 출력 map ->
    }, [])

    return (
        <div className={"subTopContainer"}>
            {fors.map((data, key) => {
               return <BodySubTopContent key={key} props={data}/>
            })}
        </div>
    );
}

export default BodySubTop;