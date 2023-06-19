import React from "react";
import "./Container.css";

const Container = (props) => {
    return (
        <div className="Container">
            <div style={{
                backgroundColor: props.color,
                height: props.height               
            }}></div>
            <p>{props.day}</p>
        </div>
    ); 
}

export default Container;