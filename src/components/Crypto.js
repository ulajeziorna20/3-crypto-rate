import React from "react";
import './css/Crypto.css'

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { bitcoin } from "@fortawesome/free-solid-svg-icons";


// // Creating an Icon Library
// import { library } from '@fortawesome/fontawesome-svg-core';

import { faCoffee } from '@fortawesome/free-solid-svg-icons'




const Crypto = () => {




  return (
    <>
      <header>
        {/* <FontAwesomeIcon icon={['fab', 'f379']} /> */}
        {/* <faImage icon={['fab', 'f379']} /> */}
        {/* <img src="bitcoin-brands.svg" alt="bitcoin" /> */}
        {/* <img class="fab fa-bitcoin" /> */}
        {/* <i class="fab fa-bitcoin"></i> */}
        {/* <FontAwesomeIcon icon={'fabf379'} /> */}
        <FontAwesomeIcon icon={faCoffee} />
        <h1>Crypto Rate</h1>
      </header>
    </>
  )
}

export default Crypto