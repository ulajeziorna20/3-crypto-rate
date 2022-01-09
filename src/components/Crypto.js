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
  const [cryptoRatesFiltered, setCryptoRatesFiltered] = useState([])
  const [inpValue, setInpValue] = useState('')
  // console.log(cryptoRates);


 
  // pobieranie danych o kursach walut
  const getCryptoRates = () => {
    axios
      .get('https://blockchain.info/ticker', {
        mode: 'corse',
      })
      .then((res) => {
        // console.log(cryptoRates)

        const ratesObj = res.data

        let arrowUp = String.fromCharCode(8593)
        // console.log(arrowUp);
        let arrowDown = String.fromCharCode(8595)
        // console.log(arrowDown);
        let arrowEqual = String.fromCharCode(8594)
        // console.log(arrowEqual);

        let newCryptoList = []


        for (const [tickerElem, cryptoRateObj] of Object.entries(ratesObj)) {
          // console.log(cryptoRateObj);

          let oldCryptoObj = cryptoRates.find((cryptoObj) => {
            return cryptoObj.currency === tickerElem
          })

          let newObj = {
            currency: tickerElem,
            sell: cryptoRateObj.sell,
            buy: cryptoRateObj.buy,
            lastRatePrice: cryptoRateObj.last,
            symbol: cryptoRateObj.symbol,
          }

          if (oldCryptoObj === undefined) {
            newObj.arrow = arrowEqual
            // stworzenie obiektu z kolorem
            newObj.cssColor = 'blue'

          } else {
            if (newObj.lastRatePrice < oldCryptoObj.lastRatePrice) {

              newObj.arrow = arrowDown
              newObj.cssColor = 'red'
              // console.log('on RED');
            } else if (newObj.lastRatePrice === oldCryptoObj.lastRatePrice) {

              newObj.arrow = arrowEqual
              // stworzenie obiektu z kolorem
              newObj.cssColor = 'blue'
              // console.log('on Orange');
            } else if (newObj.lastRatePrice > oldCryptoObj.lastRatePrice) {

              newObj.arrow = arrowUp
              // stworzenie obiektu z kolorem
              newObj.cssColor = 'green'
            }
          }
          newCryptoList.push(newObj)

          // oldCryptoList.push(cryptoRateObj.last)
          // oldCryptoList.push(oldObj);
        }
        setCryptoRates(newCryptoList)
        // console.log(newCryptoList);
        // console.log(filters(newCryptoList));
      })
  }


  useEffect(() => {
    // const interval = setInterval(getCryptoRates(), 5000)

    getCryptoRates() // ODKOMENTUJ TO, ABY POBIERAŁO PRZY STARCIE

    // return () => {
    //   clearInterval(interval)
    // }
  }, [])



  const inputHandleChange = (e) => {

    setInpValue(
      e.target.value
    )
  }


  useEffect(() => {

    const filters = () => {
      // console.log(cryptoRates);

      let filteredList = cryptoRates.filter((element) => {

        // console.log(element);
        let inpString = inpValue.trim().toLocaleLowerCase()

        if (element.currency.toLowerCase().includes(inpString)) {
          return true
        }
        return false
      })

      setCryptoRatesFiltered(filteredList)
      // setCryptoList(filteredList)
    }
    filters()

  }, [inpValue, cryptoRates])








  return (
    <section className="container-crypto">
      <header className="header-crypto">
        <FontAwesomeIcon icon={faBitcoin} />
        <h1 className="title-crypto">Crypto Rate</h1>
      </header>
      <div className="crypto-filter-container">
        <input className="inp-crypto-filter" placeholder="Filter" onChange={inputHandleChange} value={inpValue}></input>
      </div>
      <section className="crypto-list">
        <CryptoList cryptoList={cryptoRatesFiltered} />
      </section>
    </section>
  )
}

export default Crypto