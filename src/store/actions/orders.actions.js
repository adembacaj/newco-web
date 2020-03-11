import axios from 'axios';
import { GET_ORDERS, GET_ORDER, CREATE_ORDER, UPDATE_ORDER, DELETE_ORDER } from '../actionTypes';

export const getAllOrders = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/orders');
        if (data.success) {
            dispatch({ type: GET_ORDERS, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const getOneOrder = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/orders/${id}`);
        if (data.success) {
            dispatch({ type: GET_ORDER, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const createOrder = (body) => async (dispatch) => {
    try {
        const { data } = await axios.post('/orders', body);
        if (data.success) {
            dispatch({ type: CREATE_ORDER, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const updateOrder = (body, id) => async (dispatch) => {
    try {
        const { data } = await axios.put(`/orders/${id}`, body);
        if (data.success) {
            dispatch({ type: UPDATE_ORDER, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const deleteOrder = (id) => async (dispatch) => {
    try {
        const { data } = await axios.delete(`/orders/${id}`);
        if (data.success) {
            dispatch({ type: DELETE_ORDER })
        }
    } catch (e) {
        Promise.reject(e)
    }
}