import React, { useState, useEffect } from 'react'
import StudentCard from './StudentCard';
import './StudentList.css';
import axios from 'axios'
import {useSelector, useDispatch } from 'react-redux'


const StudentList = props => {

    const students = useSelector(state => state.student);
    console.log('Student = = = ' +students);
    const dispatch = useDispatch();

    const getStudents = async () => {

        const result = await axios.get(`http://localhost/api/students`)
        const action = { type: 'GET_STUDENTS' , students: result.data };
        dispatch(action)
    }

    useEffect(() => {

        getStudents()

  }, [])

  if(!students || !students.length)

  return (

    <h1>Not Student Now</h1>
  )

  return (

    <div>{

        students.map((student, index) => (

            <div key={index} style={{margin: 5}}>

                <StudentCard {...student} updateStudent={() => props.updateStudent(student.generation)} deleteStudent = {() => props.deleteStudent(student.generation)} />
                </div>
        ))
        }


        </div>

  )
    
}

export default StudentList;
