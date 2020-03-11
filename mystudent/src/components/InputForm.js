import React, { useState, useEffect } from 'react'
import './InputForm.css';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'


const InputForm = props => {

    const dispatch = useDispatch();
    const form = useSelector(state => state.form)
    const students = useSelector(state => state.student)


    const addStudent = async () => {

    await axios.post(`http://localhost/api/students/`, form)

    dispatch({
        type: 'ADD_STUDENT', student: {
            id: student.length > 0 ? student[student.length - 1].id + 1 : 0,
            ...form
        }
    })

}

return (
    <div>
        <h2>AddStudent</h2>
        <table>
            <tbody>
                <tr>
                    <td>GENERAION</td>
                    <td>
                        <input className='input' type="number" onChange={(e) => dispatch({ type: 'CHANGE_GENERATION', generation: e.target.value })} />
                    </td>
                </tr>
                <tr>
                    <td>ID</td>
                    <td>
                        <input className='text' type="number" onChange={(e) => dispatch({ type: 'CHANGE_ID', idStudent: e.target.value })} />
                    </td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>
                        <input className='input' type="text" onChange={(e) => dispatch({ type: 'CHANGE_NAME', name: e.target.value })} /> <br />
                    </td>
                </tr>
                <tr>
                    <td>Surname</td>
                    <td>
                        <input className='input' type="text" onChange={(e) => dispatch({ type: 'CHANGE_SURNAME', surname: e.target.value })} /> <br />
                    </td>
                </tr>
                <tr>
                    <td>faculty</td>
                    <td>
                        <input className='input' type="text" onChange={(e) => dispatch({ type: 'CHANGE_NAME', name: e.target.value })} /> <br />
                    </td>
                </tr>
                <tr>
                    <td>Advisor</td>
                    <td>
                        <input className='input' type="text" onChange={(e) => dispatch({ type: 'CHANGE_NAME', name: e.target.value })} /> <br />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button className='btn' onClick={() => addStudent()}>CREATE</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
)
}

export default InputForm;