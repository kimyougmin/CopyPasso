import React, {useEffect, useState} from 'react';
import "./RightMedia.css"

function RightMedia(props) {

    const mediaHeader = [
        {
            img : "./Body/contents/rightMedia/tab_total_none.gif",
            imgOver : "./Body/contents/rightMedia/tab_total_over.gif"
        },
        {
            img : "./Body/contents/rightMedia/tab_news_none.gif",
            imgOver : "./Body/contents/rightMedia/tab_news_over.gif"
        },
        {
            img : "./Body/contents/rightMedia/tab_review_none.gif",
            imgOver : "./Body/contents/rightMedia/tab_review_over.gif"
        },
        {
            img : "./Body/contents/rightMedia/tab_know_none.gif",
            imgOver : "./Body/contents/rightMedia/tab_know_over.gif"
        }
    ];

    const media = [
        {
            img : "./Body/contents/carFamilyList/Genesis_G80.jpg",
            title : "아무노ㅓ래나 일단 틀어시기다",
            content : "시기다른 랩퍼들의 반대편을 바라보던",
            liList0 : "시기다른 랩퍼들의 반대편을 바라보던",
            liList1 : "시기다른 랩퍼들의 반대편을 바라보던",
            liList2 : "시기다른 랩퍼들의 반대편을 바라보던",
            liList3 : "시기다른 랩퍼들의 반대편을 바라보던"
        },
        {
            img : "./Body/contents/carFamilyList/model_s.png",
            title : "아무노ㅓ래나 일단 틀어시기다",
            content : "시기다른 랩퍼들의 반대편을 바라보던",
            liList0 : "시기다른 랩퍼들의 반대편을 바라보던",
            liList1 : "시기다른 랩퍼들의 반대편을 바라보던",
            liList2 : "시기다른 랩퍼들의 반대편을 바라보던",
            liList3 : "시기다른 랩퍼들의 반대편을 바라보던"
        },
        {
            img : "./Body/contents/carFamilyList/porsche911.jpeg",
            title : "아무노ㅓ래나 일단 틀어시기다",
            content : "시기다른 랩퍼들의 반대편을 바라보던",
            liList0 : "시기다른 랩퍼들의 반대편을 바라보던",
            liList1 : "시기다른 랩퍼들의 반대편을 바라보던",
            liList2 : "시기다른 랩퍼들의 반대편을 바라보던",
            liList3 : "시기다른 랩퍼들의 반대편을 바라보던"
        },
    ]
    const mediaKnows = {
            liList : ["0 : 시기다른 랩퍼들의 반대편을 바라보던", "1 : 시기다른 랩퍼들의 반대편을 바라보던",
                "2 : 시기다른 랩퍼들의 반대편을 바라보던", "3 : 시기다른 랩퍼들의 반대편을 바라보던",
                "4 : 시기다른 랩퍼들의 반대편을 바라보던", "5 : 시기다른 랩퍼들의 반대편을 바라보던",
                "6 : 시기다른 랩퍼들의 반대편을 바라보던", "7 : 시기다른 랩퍼들의 반대편을 바라보던"]
    };


    const [isClick, setIsClick] = useState(0);
    const [mediaContent, setMediaContent] = useState(media[0])

    const onClickEvent = (index) =>{
        setIsClick(index)
        setMediaContent(media[index])
    }
    useEffect(() => {

    },[])


    const mediaDisplayBodyMain = () => {
        if(isClick !== 3){
            return <div className={"mediaDisplayBody"}>
                <div className={"mediaDisplayBodyMain"}>
                    <img src={mediaContent.img}/>
                    <div>
                        <b>{mediaContent.title}</b>
                        <p>{mediaContent.content}</p>
                    </div>
                </div>
                <ul className={"mediaSubText"}>
                    <li>
                        {mediaContent.liList0}
                    </li>
                    <li>
                        {mediaContent.liList1}
                    </li>
                    <li>
                        {mediaContent.liList2}
                    </li>
                    <li>
                        {mediaContent.liList3}
                    </li>
                </ul>
            </div>
        }else{
            return <ul className={"mediaSubText"}>
                {mediaKnows.liList.map((e, index) => {
                    return <li key={index}>
                        {e}
                    </li>
                })}
            </ul>
        }
    }


    return (
        <div className={"rightMedia"}>
            <img src={"./Body/contents/rightMedia/passo_main_mid_banner_counsel.jpg"}/>
            <img style={{marginTop: 8}} src={"./Body/contents/rightMedia/media_title.gif"}/>
            <div style={{marginTop: 8}}  className={"mediaDisplayHeader"}>
                {mediaHeader.map((e, index) => {
                    const isSelected = index === isClick;


                    return <img
                        src={isSelected ? e.imgOver : e.img}
                        onClick={() => {onClickEvent(index)}}
                    />
                })}
            </div>
            {mediaDisplayBodyMain()}
        </div>
    );
}

export default RightMedia;