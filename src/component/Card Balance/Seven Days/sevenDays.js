import React from "react";
import "./sevenDays.css";
import Container from "./Container/Container";

const SevenDays = () => { 
    return (
        <div className="SevenDays">
            <h2>Spending - Last 7 days</h2>
            <div className="Graph">
                <Container color = "hsl(10, 79%, 65%)" height = "40px" day = "mon" />
                <Container color = "hsl(10, 79%, 65%)" height = "70px" day = "tue" />
                <Container color = "hsl(186, 34%, 60%)" height = "120px" day = "wed" />
                <Container color = "hsl(10, 79%, 65%)" height = "60px" day = "thu" />
                <Container color = "hsl(10, 79%, 65%)" height = "45px" day = "tri" />
                <Container color = "hsl(10, 79%, 65%)" height = "100px" day = "sat" />
                <Container color = "hsl(10, 79%, 65%)" height = "50px" day = "sun" />
            </div>
        </div>
    );
}

export default SevenDays;