import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StudentCard from './components/StudentCard'
import StudentList from './components/StudentList'
import InputForm from './components/InputForm'
import './App.css';

import { useSelector, useDispatch } from 'react-redux'

export default () => {

  return (
    <div>
      <h2 className="Text">Students</h2>
      <StudentList />
      <InputForm  />
    </div>
  )
}