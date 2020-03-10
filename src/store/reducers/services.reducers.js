import { GET_SERVICES, GET_SERVICE, CREATE_SERVICE, UPDATE_SERVICE, DELETE_SERVICE } from '../actionTypes';

export default function(state=[], action){
    const {type, payload} = action;
    switch(type){
        case GET_SERVICES:
            return payload;
        case GET_SERVICE:
            return payload;
        case CREATE_SERVICE:
            return payload;
        case UPDATE_SERVICE:
            return payload;
        case DELETE_SERVICE:
            return payload;
        default:
            return state;
    }
}