import React, { useState, useEffect } from "react"
import axios from 'axios';
import ETHPrice from './ETHPrice'
import ValidatorNode from './ValidatorNode'
import ETHStaked from './ETHStaked'
import Calculation from "./Calculation";
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
                <h1>Current ETH 2.0 APR</h1>

            </div>
            <div className="app-styling">

                {/* <ETHPrice /> */}
                {/* <ValidatorNode /> */}
                {/* <ETHStaked /> */}
                <Calculation />

                {/* <p>This calculation doesn't account for validator operational costs.</p> */}
                {/* <button onClick={fetchAPY}>Fetch Data</button> */}
            </div>
            <br />
            <span className="valSpan">(Assuming ~98% Uptime for Validator; Not factoring in maintenance costs)</span>
            <br />
            <div className="app-info">


                <ul>

                    <li>Calculation based off of <a href="https://docs.google.com/spreadsheets/d/15tmPOvOgi3wKxJw7KQJKoUe-uonbYR6HF7u83LR5Mj4/edit#gid=1018097491">@StakeETH's work.</a></li>
                    <li>Data from <a href="https://coingecko.com">Coingecko</a></li>
                    <li></li>






                </ul>


            </div>

        </div>
    )
}

