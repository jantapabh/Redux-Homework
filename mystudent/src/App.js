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
import axios from 'axios'
import { bindActionCreators } from 'redux'



axios.defaults.withCredentials = true



// App เป็นส่วนหลักในการไปยังหน้าต่าง ๆ 

const App = () => {

  const [loading, setLoading] = useState(true)
  const auth = useSelector(state => state.Auth);
  const actions = bindActionCreators({ ...StudentActions, ...AuthActions }, useDispatch());

  useEffect(() => {

    actions.getLoginStatus().then(res => setLoading(false));

    // เมือ่โหลดหน้าเสร็จให้ไปที่ url ที่เก็บ session อยู่

  }, []);

  if (loading)
    return "Loading ..."

  if (!auth.accessToken && !auth.psuInfo)

    return (
      <div>
        <LoginForm />
      </div>
    )

  return (
    <div>
      <StudentList />
      <InputForm />
      <button onClick={() => actions.logout()}>Log Out!!</button>
    </div>

  )
}

export default App;