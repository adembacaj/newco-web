import axios from 'axios';
import { GET_PRODUCTS, GET_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, PRODUCT_SALES, PRODUCT_OUT_OF_STOCKS } from '../actionTypes';

export const getAllProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/products');
        if (data.success) {
            dispatch({ type: GET_PRODUCTS, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const getOneProduct = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/products/${id}`);
        if (data.success) {
            dispatch({ type: GET_PRODUCT, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const createProduct = (body) => async (dispatch) => {
    console.log(body)
    try {
        const { data } = await axios.post('/products', body);
        if (data.success) {
            dispatch({ type: CREATE_PRODUCT, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const updateProduct = (body, id) => async (dispatch) => {
    try {
        const { data } = await axios.put(`/products/${id}`, body);
        if (data.success) {
            dispatch({ type: UPDATE_PRODUCT, payload: data.data })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {
        const { data } = await axios.delete(`/products/${id}`);
        if (data.success) {
            dispatch({ type: DELETE_PRODUCT })
        }
    } catch (e) {
        Promise.reject(e)
    }
}

export const getProductSales = () => async(dispatch) => {
    try{
        const {data} = await axios.get('/products/sales');
        if(data.success){
            dispatch({ type: PRODUCT_SALES, data })
        }
    }catch(e){
        Promise.reject(e)
    }
}

export const getProductsOutOfStocks = () => async (dispatch) => {
    try{
        const {data} = await axios.get('/products/stocks')
        if(data.success){
            dispatch({type: PRODUCT_OUT_OF_STOCKS, data})
        }
    }catch(e){
        Promise.reject(e)
    }
}