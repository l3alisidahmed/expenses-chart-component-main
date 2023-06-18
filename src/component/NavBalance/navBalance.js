import React from "react";
import "./navBalance.css";

const NavBalance = () => {
    return (
        <div className="Nav">
            <div className="money">
                <p>My balance</p>
                <h2>$921.48</h2>
            </div>
            <div className="icon">
                <div className="LC"></div>
                <div className="RC"></div>
            </div>
        </div>
    );
}

export default NavBalance;