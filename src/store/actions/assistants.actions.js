import axios from 'axios';
import { GET_ASSISTANTS, GET_ASSISTANT, CREATE_ASSISTANT, UPDATE_ASSISTANT, DELETE_ASSISTANT, ASSISTANT_SALES } from '../actionTypes';

export const getAllAssistants = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/assistants');
        if (data.success) {
            dispatch({ type: GET_ASSISTANTS, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const getOneAssistant = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/assistants/${id}`);
        if (data.success) {
            dispatch({ type: GET_ASSISTANT, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const createAssistant = (body) => async (dispatch) => {
    try {
        const { data } = await axios.post('/assistants', body);
        if (data.success) {
            dispatch({ type: CREATE_ASSISTANT, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const updateAssistant = (body, id) => async (dispatch) => {
    try {
        const { data } = await axios.put(`/assistants/${id}`, body);
        if (data.success) {
            dispatch({ type: UPDATE_ASSISTANT, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const deleteAssistant = (id) => async (dispatch) => {
    try {
        const { data } = await axios.delete(`/assistants/${id}`);
        if (data.success) {
            dispatch({ type: DELETE_ASSISTANT })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const getAssistantSales = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/assistants/sales');
        if (data.success) {
            dispatch({ type: ASSISTANT_SALES, data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}