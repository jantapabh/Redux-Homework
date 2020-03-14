import React, { useState, useEffect, Component } from 'react'
import ReactDOM from 'react-dom';
require('tls').DEFAULT_MIN_VERSION = 'TLSv1'   // since TLSv1.3 default disable v1.0 
const express = require('express');
const soap = require('soap');
const bodyParser = require('body-parser')
const url = 'https://passport.psu.ac.th/authentication/authentication.asmx?wsdl';
const app = express()
const router = express.Router()
app.use(bodyParser.urlencoded({extended: false}), router)
app.use(bodyParser.json, router)


const LoginForm = () => {
 
    return(

  <div>

      <h1>Login Form</h1>


      

      <div>

Hiii


      </div>
      
  </div>

    );

}

export default LoginForm;
