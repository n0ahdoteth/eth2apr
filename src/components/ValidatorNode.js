import React, { useState, useEffect } from 'react'
import axios from "axios"

export default function ETHPrice() {
    const [ethPrice, setEthPrice] = useState(0);

    const fetchCurrencyData = () => {
        return axios.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd")
            .then(({ data }) => {
                console.log()
                return JSON.stringify(data.ethereum.usd)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchCurrencyData().then(priceData => {
            setEthPrice(priceData || 'no price data found');
        })
    }, [])

    return (
        <p class="info-p">Validator Node Cost (32ETH): ${ethPrice * 32}</p>
    )
}
