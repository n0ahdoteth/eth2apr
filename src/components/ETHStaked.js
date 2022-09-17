import React, { useState, useEffect } from 'react'
import Web3 from 'web3'
import axios from 'axios'

export default function ETHStaked() {

    const [supply, setSupply] = useState(0);

    const web3 = new Web3("https://mainnet.infura.io/v3/9e739b6391274dc2999ab08357bf830d");
    let address = "0x00000000219ab540356cBB839Cbe05303d7705Fa";
    const [balance, setBalance] = useState(0);

    const checkBalance = async () => {
        try {
            web3.eth.getBalance(address).then((balanceInWei) => {
                setBalance(web3.utils.fromWei(balanceInWei))
            });
        } catch (error) {
            console.log(error);
        }
    }
    checkBalance();

    const fetchCirculatingSupply = () => {
        return axios.get("https://api.coingecko.com/api/v3/coins/ethereum?localization=true")
            .then(({ data }) => {
                return JSON.stringify(data.market_data.circulating_supply)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        checkBalance();
        fetchCirculatingSupply().then(supplyData => {
            setSupply(supplyData || "No supply data found")
        })
    })


    return (
        <div>
            <p>
                ETH Staked in <a href="https://etherscan.io/address/0x00000000219ab540356cbb839cbe05303d7705fa">
                    Ether 2.0 Deposit Contract
                </a>: {Math.round(balance)}
            </p>

            <p>
                ETH Circulating supply {Math.round(supply)}
            </p>
        </div>
    )
}
