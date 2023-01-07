import React from "react";
import Avatar from "./Avatar";

function Card(props) {
    return (
        <div>
            <div className="card">
                <div className="top">
                    <p>{props.id}</p>
                    <h2 className="name">{props.name}</h2>
                    <Avatar img={props.img} />
                </div>
                <div className="bottom">
                    <p className="info">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;