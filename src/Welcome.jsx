import React from 'react'

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Welcome(props) {

  console.log(props.passDatalogin)
  return (
    <div className='main-div'>
      <div className="head" >
        <Link to='/'>
          <button className="logout_btn">
            logout
          </button></Link>
      </div>
      <div className="welcome">

        <h1 className="username">
          <strong>Welcome</strong> {props.passDatalogin.username}
        </h1>
      </div>
    </div>

  )
}

export default Welcome;




