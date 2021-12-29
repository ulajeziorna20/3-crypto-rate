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


  useEffect(() => {
    const interval = setInterval(() => { getCryptoRates() }, 5000);
    // console.log(`on`);

    // console.log(`useEffect interval`);
    return (() => {
      // console.log(`useEffect interval KONCZY SIE `);
      clearInterval(interval)
    })
  }, []);


  // pobieranie danych o kursach walut
  const getCryptoRates = () => {
    axios.get('https://blockchain.info/ticker', {
      mode: 'corse',
    })
      .then(res => {
        // console.log(res.data);
        

        const ratesObj = res.data;
        // console.log(ratesObj);

        let newCryptoList = [];

        let arrowUp = String.fromCharCode(8593)
        // arrowUp.cssClass = 'green'
        // console.log(arrowUp);
        let arrowDown = String.fromCharCode(8595)
        // arrowDown.cssClass = 'blue'
        // console.log(arrowDown);
        let arrowEqual = String.fromCharCode(8594)
        // arrowEqual.cssClass = 'red'
        // console.log(arrowEqual);

        console.log(cryptoRates);

        for (const [tickerElem, cryptoRateObj] of Object.entries(ratesObj)) {
          // console.log(cryptoRateObj);
        

          // let oldCryptoList = cryptoRates.find( (obj, index) => console.log(obj[index]))
          // console.log(oldCryptoList);


          let newObj = {
            currency: tickerElem,
            sell: cryptoRateObj.sell,
            buy: cryptoRateObj.buy,
            lastRatePrice: cryptoRateObj.last,
            symbol: cryptoRateObj.symbol
          }

          // if (newObj.lastRatePrice === oldCryptoList) => {

          // }

          newCryptoList.push(newObj);
          // oldCryptoList.push(cryptoRateObj.last)
          // oldCryptoList.push(oldObj);
        }

        console.log(newCryptoList);
        // console.log(oldCryptoList);
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
      <section className="crypto-list">
        <CryptoList cryptoRates={cryptoRates} />
      </section>
    </section>
  )
}

export default Crypto