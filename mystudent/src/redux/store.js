import { createStore, combineReducers, applyMiddleware } from "../../node_modules/redux";
import logger from 'redux-logger';

const initialform = {

    generation: 0,
    idStudent: 0,
    name: '',
    surname: '',
    faculty: '',
    advisor: ''

}

const formReducer = (data = initialform, action) => {

    switch (action.type) {

        case 'CHANGE_GENERATION':
            return { ...data, generation: action.generation }
        case 'CHANGE_ID':
            return { ...data, idStudent: action.idStudent }
        case 'CHANGE_NAME':
            return { ...data, name: action.name }
        case 'CHANGE_SURNAME':
            return { ...data, surname: action.surname }
        case 'CHANGE_FACULTY':
            return { ...data, faculty: action.faculty }
        case 'CHANGE_ADVISOR':
            return { ...data, advisor: action.advisor }
        default: return data;
    }

}


const studentReducer = (students = [], action) => {
    switch (action.type) {
        case 'GET_STUDENTS':
            return action.students;
        case 'ADD_STUDENT':
            return [...students, action.student]
        case 'DELETE_STUDENT':
            return students.filter(student => +student.generation !== +action.generation)
        case 'UPDATE_STUDENT':
            return students.map(student => {
                if (+student.generation === +action.generation)
                    return action.student;
                else
                    return student;
            })
    }
    return students;
}

const reducers = combineReducers({
    student: studentReducer,
    form: formReducer,
})


export const store = createStore(reducers, applyMiddleware(logger));