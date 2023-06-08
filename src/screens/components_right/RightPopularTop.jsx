import React from 'react';
import "./RightPopularTop.css"

function RightPopularTop(props) {
    const popularTopHeader = [
        {
            img : "./Body/contents/rightPopularTop/tab_day_none.gif",
            overImg : "./Body/contents/rightPopularTop/tab_day_over.gif"
        },
        {
            img : "./Body/contents/rightPopularTop/tab_week_none.gif",
            overImg : "./Body/contents/rightPopularTop/tab_week_over.gif"
        },
        {
            img : "./Body/contents/rightPopularTop/tab_month_none.gif",
            overImg : "./Body/contents/rightPopularTop/tab_month_over.gif"
        },
        {
            img : "./Body/contents/rightPopularTop/tab_vod_none.gif",
            overImg : "./Body/contents/rightPopularTop/tab_vod_over.gif"
        }
    ];
    return (
        <div className={"rightPopularTop"}>
            <img src={"./Body/contents/rightPopularTop/top7_title.gif"}/>
            <div className={"popularTopHeader"}>
                {popularTopHeader.map((e) => {
                    return <img src={e.img}/>
                })}
            </div>
        </div>
    );
}

export default RightPopularTop;