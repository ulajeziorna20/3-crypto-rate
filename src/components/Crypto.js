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
  // tylko przy stworzeniu komponentu -->  pierwsze renderowanie. Ale jeśli komponent umrze(cos wstawimy i zapiszemy na przyklad) i znowu się narodzi wtedy on najpierw zakonczy zywot returnem a potem znowu sie odrodzi


  // nie ma drugiejo parametru. nie wazne ktory stan sie zmieni uruchomi sie wtedy useEffect
  // useEffect(() => {
  //   console.log(`moj useEffect`);

  //   return (() => {
  //     console.log(`moj effekt KONCZY SIE`);
  //   })
  // })




  // UseEffect reaguje tylko na zmiane konkretnego stanu/stanów. 
  useEffect(() => {

    // if (isOn) {
    //   console.log(`IsOn!`);
    // } else {
    //   console.log(`IsOff!`);
    // }
    const myColor = () => {
      return props.color
    }


    console.log(`useEffect ON/OFF`);
    console.log(myColor());


    return (() => {
      console.log(`useE ffect ON/OFF KONCZY SIE`);
    })

  }, [props.color, isOn])

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
        <button onClick={() => {
          props.setColor((props.color === `blue`) ? `red` : `blue`)

        }} className={props.color}>
          {props.color}
        </button>

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