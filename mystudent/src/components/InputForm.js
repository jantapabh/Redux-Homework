import React, { useState, useEffect } from 'react'
import './InputForm.css';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'


const InputForm = async () => {

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
        <h2>Add Student</h2>
        <table>
            <tbody>
                <tr>
                    <td>Generation</td>
                    <td>
                        <input className='inpt' type="numbetr" onChange={(e) => dispatch({ type: 'CHANGE_GENERATION', generation: e.target.value })} />
                    </td>
                </tr>
                <tr>
                    <td>ID</td>
                    <td>
                        <input className='input' type="number" onChange={(e) => dispatch({ type: 'CHANGE_ID', id: e.target.value })} />
                    </td>
                </tr>
                <tr>
                    <td>name</td>
                    <td>
                        <input className='inpt' type="text" onChange={(e) => dispatch({ type: 'CHANGE_IMG', img: e.target.value })} /> <br />
                    </td>
                </tr>
                <tr>
                    <td>surname</td>
                    <td>
                        <input className='inpt' type="text" onChange={(e) => dispatch({ type: 'CHANGE_IMG', img: e.target.value })} /> <br />
                    </td>
                </tr>
                <tr>
                    <td>faculty</td>
                    <td>
                        <input className='inpt' type="text" onChange={(e) => dispatch({ type: 'CHANGE_IMG', img: e.target.value })} /> <br />
                    </td>
                </tr>
                <tr>
                    <td>Advisor</td>
                    <td>
                        <input className='inpt' type="text" onChange={(e) => dispatch({ type: 'CHANGE_IMG', img: e.target.value })} /> <br />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button className='btn' onClick={() => addBear()}>CREATE</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
)
}