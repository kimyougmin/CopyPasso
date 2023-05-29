import React from 'react';
import NewGoods from "../components-new/main/new-good/NewGoods";

const testData = [
    {src:"./Body/contents/carFamilyList/Genesis_G80.jpg",manufacturers: "제너세스", title : "G80"},
    {src:"./Body/contents/carFamilyList/lamborgini.jpg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크"},
    {src:"./Body/contents/carFamilyList/mode_s.jpeg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크"},
    {src:"./Body/contents/carFamilyList/porsche911.jpg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크"},
    {src:"./Body/contents/carFamilyList/porsche_cayenne.jpg",manufacturers: "두카티", title : "피니갈래 v4 RS 대형 바이크"}
];

function BodyNewGoods(props) {


    return (
        <div className={"bodyNewGoods"}>
            <img src={"./Body/contents/carFamilyList/newcar_title.gif"}/>
            <div className={"newGoodsList"}>
                {testData.map((e, index) => {
                    return <NewGoods
                        img={e.src}
                        manufacturers={e.manufacturers}
                        title={e.title}
                        key={index} />
                })}
            </div>
        </div>
    );
}

export default BodyNewGoods;
