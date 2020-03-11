import React, { useState, useEffect } from 'react'
import StudentCard from './StudentCard';
import './StudentCard.css';
import axios from ' axios'
import {useSelector, useDispatch } from 'react-redux'


const StudentList = props => {

    const students = useSelector(state => state.student);
    console.log('Student = = = ' +students);
    const dispatch = useDispatch();


    const getStudents = async => {

        const result = await axios.get(`http://localhost/api/students`)
        const action = { type: 'GET_STUDENTS' , students: result.data };
        dispatch(action)
    }

    useEffect(() => {

        getStudents()


    }, [])
    
    







}

export default StudentList;
