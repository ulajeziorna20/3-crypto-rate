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




  const getDate = () => {
    axios.get('https://blockchain.info/ticker', {
      mode: 'corse',
      method: 'GET',
      data: {
        limit: 2
      }
    })
      .then(res => {
        console.log(res.data);

        // getNotes(res.data)
       
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
      <CryptoList notes={notes} />
    </section>
  )
}

export default Crypto