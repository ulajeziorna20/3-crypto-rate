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

  const [data, setDate] = useState()


  // pobieranie danych o kursach walut
  const getDate = () => {
    axios.get('https://blockchain.info/ticker', {
      mode: 'corse'
    })
      .then(res => {
        // console.log(res.data);

        const coursesObj = res.data;
        // console.log(coursesObj);

        // setDate(coursesObj)
        // console.log(data);
      })

      
  }



  useEffect(() => {
    getDate();
  })



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
        <CryptoList />
      </section>
      <CryptoList data={data} />
    </section>
  )
}

export default Crypto