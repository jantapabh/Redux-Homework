import React, { useState, useEffect, Component } from 'react'
import ReactDOM from 'react-dom';
const url = 'https://passport.psu.ac.th/authentication/authentication.asmx?wsdl';


const LoginForm = () => {
 
    return(

  <div>

      <h1>Login Form</h1>

      <div>
          <form action="post" method="post">

Usename : <input type="text" name="username" placeholder="Put Your Username" />
Password: <input type="password" name="password" placeholder="Put YourPassword" />
<input type="submit" value="Submit" />
</form>
      </div>
      
  </div>

    );

}

export default LoginForm;
