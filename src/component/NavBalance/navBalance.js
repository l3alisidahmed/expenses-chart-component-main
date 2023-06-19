import React from "react";
import "./navBalance.css";

const NavBalance = (props) => {
    return (
        <div className="Nav">
            <div className="money">
                <p>My balance</p>
                <h2>${props.money}</h2>
            </div>
            <div className="icon">
                <div className="LC"></div>
                <div className="RC"></div>
            </div>
        </div>
    );
}

export default NavBalance;