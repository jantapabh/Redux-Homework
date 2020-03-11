import React from 'react';
import './StudentCard.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

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
        <div className="List">
            <div className="Top-up">
                GEN : {props.generation} <br />
                ID : {props.idStudent} <br />
                Name : {props.name} <br />
                Surname : {props.surname} <br />
                Faculty : {props.faculty} <br />
                Advisor :  {props.advisor} <br />
            </div>
            <div>
                <button className="Button" onClick={updateStudent}>Update</button>
                <button className="Button" onClick={deleteStudent}>Delete</button>
            </div>

        </div>
    )
}

export default StudentCard;

