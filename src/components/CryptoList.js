import React, { useState } from "react";
import './css/CryptoList.css';



const CryptoList = (props) => {

  let cryptoRatesListJSX = props.cryptoRates.map((ticker) => {

    return (
      <li className="ticker-item">Last rate: {ticker.lastRatePrice},{ticker.currency}, {ticker.symbol}</li>
    )

    
  })
  console.log(cryptoRatesListJSX);

  
  return (
    <>
    </>
  )
}


export default CryptoList;