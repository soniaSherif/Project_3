import React from "react";

const Front = (props) => {
    return(
        <div className={"Front " + props.color}>
            <h2>{props.question}</h2>
            <img src={props.img}/>
        </div>

    )

}
export default Front;