import {ASSISTANT_SALES} from '../actionTypes';

export default function (state=[], action){
    const {type, data} = action;
    switch(type){
        case ASSISTANT_SALES:
            return data
        default:
            return state;
    }
}