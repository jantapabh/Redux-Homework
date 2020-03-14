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


// App เป็นส่วนหลักในการไปยังหน้าต่าง ๆ 


// const LoginForm = () => <h1>Home</h1>
// const StudentList = () => <h1>About</h1>
// const InputForm = () => <h1>Post</h1>



const App = () => {

  return (
    
    <div className="Main">
      <h2 className="Text">Students</h2>
      <Provider store={store}>
      <BrowserRouter> 
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/studentlist" component={StudentList} />
        <Route exact path="/studentlist" component={InputForm} />
      </Switch>
      </BrowserRouter>
      </Provider>
      {/* <StudentList /> */}
      {/* <InputForm /> */}

    </div>

  )
}

export default App;