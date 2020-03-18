import { createStore, combineReducers, applyMiddleware } from "../../node_modules/redux";
import logger from 'redux-logger';
import axios from 'axios'

//ส่วนของการยืนยันตัวตน


const initAuthData = {

    accessToken: null,
    psuInfo: null

}

export const AuthActions = {
    getLoginStatus: () => async (dispatch) => {
        const res = await axios.get(`${config.apiUrl}/auth`);
        dispatch({ type: 'GET_LOGIN_STATUS', payload: res.data })
    },

    loginPSU: (username, password) => async (dispatch) => {
        const res = await axios.post(`${config.apiUrl}/auth/psu`, { username, password });
        const { stdId, fname, lname, id, type } = res.data;

        if (stdId.length > 0)
            dispatch({ type: 'LOGIN_PSU', payload: res.data })
    },
    logout: () => async (dispatch) => {


        const res = await axios.get(`${config.apiUrl}/auth/logout`);
        dispatch({ type: 'LOGOUT' })

    }

}

const AuthReducer = (data = initAuthData, action) => {

    switch (action.type) {
        case 'GET_LOGIN_STATUS':
            return action.payload;
        case 'LOGIN_PSU':
            return { ...data, psuInfo: action.payload }
        case 'LOGOUT':
            return initAuthData;
        default:
            return data

    }
}


// ส่วนของ fontend

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