import React, { useEffect, useState } from "react";
import './css/Crypto.css'

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import CryptoList from "./CryptoList";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// axios
import axios from "axios";





const Crypto = (props) => {

  const [cryptoRates, setCryptoRates] = useState([])
  // console.log(cryptoRates);



  // useEffect(() => {
  //   const interval = setInterval(() => { getCryptoRates() }, 5000);
  //   // console.log(`on`);

  //   console.log(`useEffect interval`);
  //   return (() => {
  //     console.log(`useEffect interval KONCZY SIE `);
  //     clearInterval(interval)
  //   })
  // }, []);





  // pobieranie danych o kursach walut
  const getCryptoRates = () => {
    axios.get('https://blockchain.info/ticker', {
      mode: 'corse',
    })
      .then(res => {
        // console.log(res.data);

        const ratesObj = res.data;
        console.log(ratesObj);

        // dlaczego last tutaj?
        // let lastCryptoList = [];
        let newCryptoList = [];
        // console.log(newCryptoList);

        for (const [tickerElem, cryptoRateObj] of Object.entries(ratesObj)) {

          let newObj = {
            currency: tickerElem,
            symbol: cryptoRateObj.symbol,
            sell: cryptoRateObj.sell,
            buy: cryptoRateObj.buy,
            lastRatePrice: cryptoRateObj.last

          }
          // console.log(newObj);
          newCryptoList.push(newObj);
        }
   
        setCryptoRates(newCryptoList)
       
      })
  }


  return (
    <section className="container-crypto">
      <header className="header-crypto">
        <FontAwesomeIcon icon={faBitcoin} />
        <h1 className="title-crypto">Crypto Rate</h1>
      </header>
      <div className="crypto-filter-container">
        <input className="inp-crypto-filter" placeholder="Filter"></input>
      </div>
      <section>
        <CryptoList cryptoRates={cryptoRates} />
      </section>
    </section>
  )
}

export default Crypto