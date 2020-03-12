import axios from 'axios';
import { GET_SHOPS, GET_SHOP, CREATE_SHOP, UPDATE_SHOP, DELETE_SHOP, SHOP_SALES } from '../actionTypes';

export const getAllShops = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/shops');
        if (data.success) {
            dispatch({ type: GET_SHOPS, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const getOneShop = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/shops/${id}`);
        if (data.success) {
            dispatch({ type: GET_SHOP, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const createShop = (body) => async (dispatch) => {
    try {
        const { data } = await axios.post('/shops', body);
        if (data.success) {
            dispatch({ type: CREATE_SHOP, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const updateShop = (body, id) => async (dispatch) => {
    try {
        const { data } = await axios.put(`/shops/${id}`, body);
        if (data.success) {
            dispatch({ type: UPDATE_SHOP, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const deleteShop = (id) => async (dispatch) => {
    try {
        const { data } = await axios.delete(`/shops/${id}`);
        if (data.success) {
            dispatch({ type: DELETE_SHOP })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const getShopSales = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`/shops/sales`);
        if (data.success) {
            dispatch({ type: SHOP_SALES, data: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}