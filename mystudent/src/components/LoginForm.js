import React, { useState, useEffect, Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter , Router, Switch, Link } from 'react-router-dom';
import FacebookLoginWithButton from 'react-facebook-login';

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
  

const LoginForm = () => {

    return (

        <div className="Main">
            <h1>Login Form</h1>
            <div className="Main">
                <form action="post" method="post">
                    Usename : <input type="text" name="username" placeholder="Put Your Username" /><br />
                    Password: <input type="password" name="password" placeholder="Put YourPassword" /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>

        <Link to={'/studentlist'}>
        <FacebookLoginWithButton
          appId="526159711615139"
          autoLoad
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
          icon="fa-facebook">
          </FacebookLoginWithButton>
          </Link>
}
        </div>

    );

}

export default LoginForm;
