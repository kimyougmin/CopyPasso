import React from 'react';
import "./BodySubTopContent.css"

function BodySubTopContent(props) {
    const {
        like,
        img,
        manufacturers,
        name,
        title
    } = props;


    return (
        <div className={"subTop"}>
            <ul>
                <li className={"subTopList"}>
                    <dl>
                        <dt className={"hotGood"}>
                            <img src={like} height={15}/>
                        </dt>
                        <dd className={"thumb"}>
                            <img src={img}/>
                        </dd>
                        <dd className={"name"}>
                            {manufacturers+"/"+name}
                        </dd>
                        <dd className={"titleEllipsis"}>
                            {title}
                        </dd>
                    </dl>
                </li>
            </ul>
        </div>
    );
}

export default BodySubTopContent;