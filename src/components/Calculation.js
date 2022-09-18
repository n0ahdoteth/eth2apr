import React, { useState, useEffect } from 'react'
import Web3 from 'web3'

export default function Calculation() {

    const [offlinePenalty, setOfflinePenalty] = useState(0);
    const [stakeReward, setStakeReward] = useState(0);
    const [baseReward, setBaseReward] = useState(0);
    const [returns, setReturns] = useState(0);
    const [ethStaked, setEthStaked] = useState(0);

    // const [ethCalcs, setEthCalcs] = useState({
    //     onlineReward: 0,
    //     validatorUptime: .98,
    //     offlinePenalty: 0,
    //     stakeReward: 0,
    //     baseReward: 0
    // })

    // 60*60*24*365.242/(12*32)
    const epochPerYear = 82179.45;
    const validatorUptime = .98;
    const baseRewardsPerEpoch = 4;
    const baseRewardFactor = 64;

    const web3 = new Web3("https://mainnet.infura.io/v3/9e739b6391274dc2999ab08357bf830d");
    let address = "0x00000000219ab540356cBB839Cbe05303d7705Fa";

    const checkBalance = () => {
        try {
            web3.eth.getBalance(address).then((balanceInWei) => {
                setEthStaked(web3.utils.fromWei(balanceInWei))
            });
        } catch (error) {
            console.log(error);
        } // 
    }

    const calcBaseReward = () => {
        checkBalance();
        let baseRewardCalculation = 32 * 10 ** 9 * baseRewardFactor / Math.sqrt(ethStaked * 10 ** 9) / baseRewardsPerEpoch;
        setBaseReward(baseRewardCalculation);
    }

    const calcValidatorReward = () => {
        calcBaseReward();
        let proportionalBaseReward = 3;
        let lateSlotPenalty = .0156;
        let onlineValidatorReward = baseReward * proportionalBaseReward * validatorUptime + 1 * (0.125 * baseReward * validatorUptime + 0.875 * baseReward * (validatorUptime + validatorUptime * (1 - validatorUptime) * (1 - lateSlotPenalty) + validatorUptime * (1 - validatorUptime) ** 2 * (1 - 2 * lateSlotPenalty)));
        setStakeReward(onlineValidatorReward)
    }

    const calcValidatorPenalty = () => {
        calcValidatorReward();
        let offlinePenaltyCalculation = baseReward * baseRewardsPerEpoch;
        setOfflinePenalty(offlinePenaltyCalculation);
    }

    const calculateReturns = () => {
        calcValidatorPenalty();
        let returnRate = (stakeReward * validatorUptime - offlinePenalty * (1 - validatorUptime)) * epochPerYear / 10 ** 9 / 32;
        setReturns(returnRate * 100);
        if (returns == 0)
            return false;
        else return true;
    }

    useEffect(() => {
        calculateReturns();
    })

    return (
        <p className="yield" >{returns ? `${returns.toFixed(3)}% APR` : "Calculating"}</p>
    )
}

