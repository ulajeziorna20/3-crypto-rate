import React, { useEffect, useState } from "react";
import './css/Crypto.css'

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import CryptoList from "./CryptoList";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// axios
import axios from "axios";





const Crypto = () => {

  const [cryptoRates, setCryptoRates] = useState({})
  const [isOn, setIsOn] = useState(false)



  useEffect(() => {
    const interval = setInterval(() => { getCryptoRates() }, 3000);
    // console.log(`on`);

    // console.log(`off`);
    return () => clearInterval(interval);

  }, []);


  // useEffect(() => {
  //   console.log(`moj useEffect`);
  // })

  // useEffect(() => {
  //   if (isOn) {
  //     console.log(`IsOn!`);
  //   }
  // })


  // useEffect(() => {
  //   if (isOn === false) {
  //     console.log(`IsOff!`);
  //   }
  // })



  // pobieranie danych o kursach walut
  const getCryptoRates = () => {
    axios.get('https://blockchain.info/ticker', {
      mode: 'corse',
    })
      .then(res => {
        // console.log(res.data);

        const ratesObj = res.data;
        console.log(ratesObj);



        setCryptoRates(() => {
          let newCryptoList = [];

          for (const [tickerElem, cryptoRate] of Object.entries(ratesObj)) {
            let lastCryptoList = cryptoRates.find((cryptoObj) => {
              return (cryptoObj.currency === tickerElem);
            });



            let newObj = {
              currency: tickerElem,
              symbol: cryptoRate.symbol,
              sell: cryptoRate.sell,
              buy: cryptoRate.buy,
              lastRatePrice: cryptoRate.last,

            }

            newCryptoList.push(newCryptoObj);

          }

        

        })




      })
  }





  return (
    <section className="container-crypto">
      <header className="header-crypto">
        <button onClick={() => {
          setIsOn((isOn) => !isOn)
        }}>{isOn ? `off` : `on`}</button>
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