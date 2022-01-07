import React, { useState } from "react";
import './css/CryptoList.css';
// iniquedID
import uniqueId from 'lodash.uniqueid';



const CryptoList = (props) => {


  let cryptoRatesListJSX = props.cryptoRates.map((ticker) => {

    return (
      <li className="ticker-item" key={uniqueId('crypto')}>
        <span className="black">Last rate:</span>
        <span className={ticker.cssColor} >{ticker.lastRatePrice}
        </span>
        <span className={`arrow ${ticker.cssColor}`} >{ticker.arrow}</span>
        <span className="symbol black">{ticker.symbol}</span>
      </li>
    )
  })
  // console.log(cryptoRatesListJSX);


  return (
    <>
      <ul>{cryptoRatesListJSX}</ul>
    </>
  )
}


export default CryptoList;