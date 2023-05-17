import React, {useEffect, useState} from 'react';
import "./BodyTopRight.css"

function BodyTopRight(props) {
    const imgList = ["./Body/contents/car_main_banner_divine.jpg", "./Body/contents/bike_main_banner_gallery.jpg","./Body/contents/bike_main_banner_motok.jpg"]
    const [swiperImg, setSwiperImg] = useState(0);
    useEffect(()=>{

    },[])
    const changeImg = () =>{
        if(swiperImg == 2){
            setSwiperImg(0)
        }else {
            setSwiperImg(swiperImg + 1)
        }
    }
    setTimeout(changeImg, 5000)
    return (
        <div className={"topRight"}>
            <img src={imgList[swiperImg]}/>
        </div>
    );
}

export default BodyTopRight;