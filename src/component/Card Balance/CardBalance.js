import React from "react";
import "./CardBalance.css";
import SevenDays from "./Seven Days/sevenDays";
import DataOfMonth from "./month Balance/month";

const CardBalance = () => {
    return (
        <div className="Card">
            <SevenDays />
            <hr className="hr"/>
            <DataOfMonth money = "478.33" pron = "2.4" />
        </div>
    );
}

export default CardBalance;