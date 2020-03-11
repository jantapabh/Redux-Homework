import React from 'react';
import './StudentCard.css';
import axios from 'axios';
import { usrDispatch, useSelector, useDispatch } from 'react-redux';

const StudentCard = props => {

    const form = useSelector(state => state.form)
    const dispatch = useDispatch();

    const deleteStudent = async () => {
        await axios.delete(`https://localhost/api/students/${props. generation}`)
        dispatch({ type: 'DELETE_STUDENT', generation: props. generation })
    }

    const updateStudent = async () => {

    await axios.put(`https://localhost/api/students/${props. generation}`, form)
    dispatch({ type: 'UPDATE_STUDENT',  generation: props. generation, Student: {...form,  generation: props. generation} })
    }

    return (

        <div>
            <div>
                <p>{props.generation}</p>
                <p>{props.idStudent }</p>
                <p>{props.name }</p>
                <p>{props.surname }</p>
                <p>{props.faculty }</p>
                <p>{props.advisor }</p>
            </div>
            <div>
                <div onClick={updateStudent}>Update</div>
                <div onClick={deleteStudent}>Delete</div>
            </div>
        </div>
    )                          
}

export default StudentCard;

