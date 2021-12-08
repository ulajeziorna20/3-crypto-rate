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
    const interval = setInterval(() => { getCryptoRates() }, 5000);
    // console.log(`on`);

    console.log(`useEffect interval`);
    return (() => {
      console.log(`useEffect interval KONCZY SIE `);
      clearInterval(interval)
    })
  }, []);
  // tylko przy stworzeniu komponentu -->  pierwsze renderowanie


  // nie ma drugiejo parametru. nie wazne ktory stan sie zmieni
  // useEffect(() => {
  //   console.log(`moj useEffect`);

  //   return (() => {
  //     console.log(`moj effekt KONCZY SIE`);
  //   })
  // })

  useEffect(() => {
   
    // if (isOn) {
    //   console.log(`IsOn!`);
    // } else {
    //   console.log(`IsOff!`);
    // }
    
    console.log(`useEffect ON/OFF`);

    return (() => {
      console.log(`useEffect ON/OFF KONCZY SIE`);
    })
    
  }, [isOn])

  // useEffect(() => {
  //   const interval = setInterval(() => console.log('tick'), 1000);

  //   return () => clearInterval(interval);
  // });


  // useEffect(() => {
  //   const interval = setInterval(() => console.log('tick'), 1000);

  //   return () => clearInterval(interval);
  // }, []);



  // useEffect(() => {
  //   const interval = setInterval(() => console.log('tick'), 1000);

  //   return () => clearInterval(interval);
  // }, [isOn]);



  // useEffect(() => {
  //   if (isOn === false) {
  //     console.log(`IsOff!`);
  //   }
  // }, [isOn])



  // pobieranie danych o kursach walut
  const getCryptoRates = () => {
    axios.get('https://blockchain.info/ticker', {
      mode: 'corse',
    })
      .then(res => {
        // console.log(res.data);

        const ratesObj = res.data;
        console.log(ratesObj);


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
          // newCryptoList.push(newObj);


        }


        setCryptoRates(ratesObj)

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