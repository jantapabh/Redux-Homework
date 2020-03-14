import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import StudentCard from './components/StudentCard'
import StudentList from './components/StudentList'
import InputForm from './components/InputForm'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import FacebookLoginWithButton from 'react-facebook-login';


// App เป็นส่วนหลักในการไปยังหน้าต่าง ๆ 


// const LoginForm = () => <h1>Home</h1>
// const StudentList = () => <h1>About</h1>
// const InputForm = () => <h1>Post</h1>

const responseFacebook = (response) => {
  console.log(response);
}

const componentClicked = () => {
  console.log("Clicked!")
}


const App = () => {

  return (

    <div className="Main">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/studentlist" component={StudentList} />
            <Route exact path="/studentlist" component={InputForm} />
          </Switch>
        </BrowserRouter>

        <FacebookLoginWithButton
          appId="526159711615139"
          autoLoad
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
          icon="fa-facebook" />

      </Provider>
    </div>

  )
}

export default App;