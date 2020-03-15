import React, { useState, useEffect, Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Switch, Link, Redirect } from 'react-router-dom';
import FacebookLoginWithButton from 'react-facebook-login';
import StudentCard from './StudentCard'
import StudentList from './StudentList'
const url = 'https://passport.psu.ac.th/authentication/authentication.asmx?wsdl';

console.log(url);

const responseFacebook = (response) => {
  console.log(response);
}

const componentClicked = () => {
  console.log("Clicked!")
}

const UserScreen = ({ user }) => (
  <>
    <h1>Welcome {user.name}!</h1>
    <p>{user.email}</p>
    <img src={user.picture.data.url} height={user.picture.height} width={user.picture.width} alt="avatar" />
  </>
)


const LoginForm = (props) => {

  // const myRedirect = () => {

  //   return (

  //     <Redirect to="/studentlist" />

  //   );y
  // }

  // const reDirect = () => {

  //   return (

  //     <Redirect to="/" />

  //   );
  // }


  const username = "jantapa"
  const password = "jantapa2407."
  const appId = '526159711615139';
  const conditionID = '526159711615139';
     
 


  return (

    <div className="Main">
      <h1>Login Form</h1>
      <div className="Main">
        
        <form Redirect to="/studentlist">
          Usename : <input type="text" name="username" placeholder="Put Your Username" /><br />
          Password: <input type="password" name="password" placeholder="Put YourPassword" /><br />
          <input type="submit" value="Submit" Redirect to="/studentlist"/>
        </form>
      </div>

      <div className="Facebook">
        <FacebookLoginWithButton
          action="/studentlist"
          Router="/studentlist"
          appId="526159711615139"
          autoLoad
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
          icon="fa-facebook">
        </FacebookLoginWithButton>
      </div>
    </div>

  );

}

export default LoginForm;
