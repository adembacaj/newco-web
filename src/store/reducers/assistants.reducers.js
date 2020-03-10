import { GET_ASSISTANTS, GET_ASSISTANT, CREATE_ASSISTANT, UPDATE_ASSISTANT, DELETE_ASSISTANT } from '../actionTypes';

export default function(state=[], action){
    const {type, payload} = action;
    switch(type){
        case GET_ASSISTANTS:
            return payload;
        case GET_ASSISTANT:
            return payload;
        case CREATE_ASSISTANT:
            return payload;
        case UPDATE_ASSISTANT:
            return payload;
        case DELETE_ASSISTANT:
            return payload;
        default:
            return state;
    }
}