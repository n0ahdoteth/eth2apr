import React from 'react'

const AppInfo = () => {
    return (
        <div>
            <div className="app-info">
                <ul>
                    <li>Data updated/APR recalculated every few minutes</li>
                    <li>Annual percentage rate (APR) is in Ether terms, not USD</li>
                    <li>Calculation based off of <a href="https://docs.google.com/spreadsheets/d/15tmPOvOgi3wKxJw7KQJKoUe-uonbYR6HF7u83LR5Mj4/edit#gid=1018097491" target="_blank">@StakeETH's work</a></li>
                    <li>Ethereum data from <a href="https://coingecko.com" target="_blank">Coingecko API</a></li>
                </ul>
            </div>
        </div>
    )
}

export default AppInfo;
