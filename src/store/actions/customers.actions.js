import axios from 'axios';
import { GET_CUSTOMERS, GET_CUSTOMER, CREATE_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER } from '../actionTypes';

export const getAllCustomers = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/customers');
        if (data.success) {
            dispatch({ type: GET_CUSTOMERS, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const getOneCustomer = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/customers/${id}`);
        if (data.success) {
            dispatch({ type: GET_CUSTOMER, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const createCustomer = (body) => async (dispatch) => {
    try {
        const { data } = await axios.post('/customers', body);
        if (data.success) {
            dispatch({ type: CREATE_CUSTOMER, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const updateCustomer = (body, id) => async (dispatch) => {
    try {
        const { data } = await axios.put(`/customers/${id}`, body);
        if (data.success) {
            dispatch({ type: UPDATE_CUSTOMER, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const deleteCustomer = (id) => async (dispatch) => {
    try {
        const { data } = await axios.delete(`/customers/${id}`);
        if (data.success) {
            dispatch({ type: DELETE_CUSTOMER })
        }
    } catch (e) {
        Promise.reject(e)
    }
}