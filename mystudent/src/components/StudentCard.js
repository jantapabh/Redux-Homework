import React from 'react';
import './StudentCard.css';
import axios from 'axios';
import {  useSelector, useDispatch } from 'react-redux';

const StudentCard = props => {

    const form = useSelector(state => state.form)
    const dispatch = useDispatch();

    const deleteStudent = async () => {
        await axios.delete(`http://localhost:8000/api/students/${props.generation}`)
        dispatch({ type: 'DELETE_STUDENT', generation: props.generation })
    }

    const updateStudent = async () => {

        await axios.put(`http://localhost:8000/api/students/${props.generation}`, form)
        dispatch({ type: 'UPDATE_STUDENT', generation: props.generation, student: { ...form, generation: props.generation } })
    }

    return (
        <div>
            <div>
                <p>{props.generation}</p>
                <p>{props.idStudent}</p>
                <p>{props.name}</p>
                <p>{props.surname}</p>
                <p>{props.faculty}</p>
                <p>{props.advisor}</p>
            </div>
            <div>
                <button onClick={updateStudent}>Update</button>
                <button onClick={deleteStudent}>Delete</button>
            </div>

        </div>
    )
}

export default StudentCard;

