import React, { useState } from 'react';
import axios from 'axios';
import { Router } from 'express';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import StudentList from './StudentList'
import InputForm from './InputForm'

const LoginForm = props => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('Not yet logged in');
    
    const login = async () => {
        const res = await axios.post('/api/psu', { username, password });
        setLoginStatus(JSON.stringify(res.data))
        console.log(res)
    }

    return (

        <div>
            <Route exact path="/studentlist" component={StudentList} />
            <Route exact path="/studentlist" component={InputForm} />
 </div>

    )
}

export default LoginForm

{/* <form action="/" method="post">
 Username: <input type="text" name="username" /> <br>
 Password: <input type="password" name="password" /> <br>
 <input type="submit" value="Submit">
</form> */}