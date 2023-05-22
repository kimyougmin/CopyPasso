import React from 'react';
import "./BodySubTopContent.css"

function BodySubTopContent(props) {


    return (
        <div className={"subTop"}>
            <ul>
                <li className={"subTopList"}>
                    <dl>
                        <dt className={"hotGood"}>
                            <img src={props.props.like} height={15}/>
                        </dt>
                        <dd className={"thumb"}>
                            <img src={props.props.img}/>
                        </dd>
                        <dd className={"name"}>
                            {props.props.manufacturers+"/"+props.props.name}
                        </dd>
                        <dd className={"titleEllipsis"}>
                            {props.props.title}
                        </dd>
                    </dl>
                </li>
            </ul>
        </div>
    );
}

export default BodySubTopContent;