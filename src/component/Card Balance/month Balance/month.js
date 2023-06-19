import React from "react";
import "./month.css";

const DataOfMonth = (props) => {
    return (
        <div className="moneyOfMonth">
            <div className="leftContent">
                <p>Total this month</p>
                <h1>${props.money}</h1>
            </div>
            <div className="rightContent">
                <p>+{props.pron}%</p>
                <p className="txt">from last month</p>
            </div>
        </div>
    );
}

export default DataOfMonth;