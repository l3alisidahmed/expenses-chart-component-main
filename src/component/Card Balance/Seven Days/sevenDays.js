import React from "react";
import "./sevenDays.css";
import Container from "./Container/Container";

const SevenDays = () => { 
    return (
        <div className="SevenDays">
            <p>Spending - Last 7 days</p>
            <div className="Graph">
                <Container />
                <Container />
                <Container />
                <Container />
                <Container />
                <Container />
                <Container />
            </div>
        </div>
    );
}

export default SevenDays;