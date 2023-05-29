import React from 'react';
import "./BodyPopularGood.css"

function BodyPopularGoodList(props) {


    return (
        <div className={"list"}>
            <ul>
                <li className={"P_ListLi"}>
                    <dl>
                        <dt>
                            <img src={props.props.src}/>
                        </dt>
                        <dd>
                            <b>{props.props.manufacturers}/{props.props.title.substring(0,8).padEnd(1,".")}</b>
                        </dd>
                        <div>
                            <dd>
                                {props.props.year}년
                            </dd>
                            <dd>
                                |
                            </dd>
                            <dd>
                                {props.props.distance}km
                            </dd>
                            <dd>
                                |
                            </dd>
                            <dd>
                                {props.props.address}
                            </dd>
                        </div>
                    </dl>
                </li>
            </ul>
        </div>
    );
}

export default BodyPopularGoodList;