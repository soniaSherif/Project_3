import React from "react";

const Back = (props) => {
    return(
        <div className={"Back " + props.color}>
            <h1>{props.answer}</h1>
        </div>

    )

}
export default Back;