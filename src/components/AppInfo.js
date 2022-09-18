import React from 'react'

const AppInfo = () => {
    return (
        <div>
            <div className="app-info">
                <ul>
                    <li>Annual percentage rate (APR) is in ETH terms, not USD</li>
                    <li>Calculation based off of <a href="https://docs.google.com/spreadsheets/d/15tmPOvOgi3wKxJw7KQJKoUe-uonbYR6HF7u83LR5Mj4/edit#gid=1018097491">@StakeETH's work</a></li>
                    <li>Data from <a href="https://coingecko.com">Coingecko</a></li>
                </ul>
            </div>
        </div>
    )
}

export default AppInfo;
