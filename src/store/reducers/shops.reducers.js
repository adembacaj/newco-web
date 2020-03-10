import { GET_SHOPS, GET_SHOP, CREATE_SHOP, UPDATE_SHOP, DELETE_SHOP } from '../actionTypes';

export default function(state=[], action){
    const {type, payload} = action;
    switch(type){
        case GET_SHOPS:
            return payload;
        case GET_SHOP:
            return payload;
        case CREATE_SHOP:
            return payload;
        case UPDATE_SHOP:
            return payload;
        case DELETE_SHOP:
            return payload;
        default:
            return state;
    }
}