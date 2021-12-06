import React from "react";
import './css/Crypto.css'

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'




const Crypto = () => {




  return (
    <section class="container-crypto">
      <header class="header-crypto">
        <FontAwesomeIcon icon={faBitcoin} />
        <h1 class="title-crypto">Crypto Rate</h1>
      </header>
      <div class="crypto-filter-container">
      <input class="inp-crypto-filter" placeholder="Filter"></input>
      </div>
      <section>
      
      </section>
    </section>
  )
}

export default Crypto