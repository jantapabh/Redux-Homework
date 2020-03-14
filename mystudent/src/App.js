import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StudentCard from './components/StudentCard'
import StudentList from './components/StudentList'
import InputForm from './components/InputForm'
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'

// App เป็นส่วนหลักในการไปยังหน้าต่าง ๆ 



export default () => {

  return (

    <div className="Main">
      <h2 className="Text">Students</h2>
      <Route path="/" component={LoginForm} />
      <Route path="/studentlist" component={StudentList} />
      <Route path="/studentlist" component={InputForm} />
      {/* <StudentList /> */}
      {/* <InputForm /> */}
      
    </div>

  )
}