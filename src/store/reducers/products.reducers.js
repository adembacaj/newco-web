import { GET_PRODUCTS, GET_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../actionTypes';

export default function(state=[], action){
    const {type, payload} = action;
    switch(type){
        case GET_PRODUCTS:
            return payload;
        case GET_PRODUCT:
            return payload;
        case CREATE_PRODUCT:
            return payload;
        case UPDATE_PRODUCT:
            return payload;
        case DELETE_PRODUCT:
            return payload;
        default:
            return state;
    }
}