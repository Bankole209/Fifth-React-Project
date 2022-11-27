import React from "react";
import reactLogo from "../Asquare.png"; 


function Navbar() {
    return (
      <header className="head">
        <div className="nav">
          <div className="icon">
          <img src={reactLogo} alt="react logo" width="130px" />
          </div>
        </div>
      </header>
    );
  }
  
export default Navbar;