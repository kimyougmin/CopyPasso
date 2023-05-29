import React from 'react';
import NewGoods from "../components-new/main/new-good/NewGoods";
import "./BodyNewGoods.css"

const testData0 = [
    {src:"./Body/contents/carFamilyList/Genesis_G80.jpg",manufacturers: "제너세스", title : "G80"},
    {src:"./Body/contents/carFamilyList/lamborgini.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크"},
    {src:"./Body/contents/carFamilyList/model_s.png",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크"},
    {src:"./Body/contents/carFamilyList/porsche911.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크"},
    {src:"./Body/contents/carFamilyList/porsche_cayenne.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크"}
];
const testData1 = [
    {src:"./Body/contents/carFamilyList/Genesis_G80.jpg",manufacturers: "제너세스", title : "G80"},
    {src:"./Body/top/v4.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크"},
    {src:"./Body/contents/carFamilyList/model_s.png",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크"},
    {src:"./Body/contents/carFamilyList/porsche911.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크"},
    {src:"./Body/contents/carFamilyList/porsche_cayenne.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크"}
];

function BodyNewGoods(props) {


    return (
        <div className={"bodyNewGoods"}>
            <div style={{width:100+"%", height: 50+"%"}}>
                <img className={"newGoodsHeader"} src={"./Body/contents/carFamilyList/newcar_title.gif"}/>
                <div style={{borderBottom: "2px solid #d7d7d7", marginBottom: 20}}></div>
                <div className={"newGoodsList"}>
                    {testData0.map((e, index) => {
                        const lastComponent = index === testData0.length - 1;
                        const className = lastComponent ? "lastList" : "list";

                        return <NewGoods
                            img={e.src}
                            className={className}
                            manufacturers={e.manufacturers}
                            title={e.title}
                            key={index} />
                    })}
                </div>
            </div>

            <div style={{width:100+"%", height: 50+"%", marginTop: 50}}>
                <img className={"newGoodsHeader"} src={"./Body/contents/carFamilyList/family_p_title.gif"}/>
                <div style={{borderBottom: "2px solid #d7d7d7", marginBottom: 20}}></div>
                <div className={"newGoodsList"}>
                    {testData1.map((e, index) => {
                        const lastComponent = index === testData1.length - 1;
                        const className = lastComponent ? "lastList" : "list";

                        return <NewGoods
                            img={e.src}
                            className={className}
                            manufacturers={e.manufacturers}
                            title={e.title}
                            key={index} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default BodyNewGoods;
