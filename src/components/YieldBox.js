import React, { useState, useEffect } from "react"
import ETHPrice from './ETHPrice'
import ValidatorNode from './ValidatorNode'
import Calculation from "./Calculation";
import AppInfo from "./AppInfo";
/*

A: Online per-validator reward per epoch (in Gwei)
B: Validator Uptime
C: Offline per-validator penalty per epoch (in gwei)
B: Validator Uptime
D: Epoch per year
32

(A*B-C(1-B))*D/10^9/32)

*/

export default function YieldBox() {
    return (
        <div>
            <div>
                <h1>Current ETH 2.0 Staking APR</h1>
            </div>
            <div className="stats-div">
                <div className="app-styling">
                    <Calculation />
                </div>
                <div className="app-styling">
                    <ETHPrice />
                    <ValidatorNode />
                </div>
            </div>
            <br />
            <span className="valSpan">(Assuming ~98% Uptime for Validator; Not factoring in maintenance costs)</span>
            <AppInfo />
        </div>
    )
}

