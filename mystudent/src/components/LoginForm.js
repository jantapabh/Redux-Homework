import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import StudentList from './StudentList'
import InputForm from './InputForm'
import FacebookLogin from 'react-facebook-login';
import './LoginForm.css';


const LoginForm = () => {

    const [account, setAccount] = useState(' ')

    const responseFacebook = (response) => {

        console.log(response);
        // setAccount(response)
    }

    const componentClicked = () => {
        console.log("Clicked!")
    }

    useEffect(() => {


        responseFacebook();

    }, [])


    return (

        <div className="middle">
            <FacebookLogin
                appId="526159711615139"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
            />
        </div>
    )
}

export default LoginForm;

