import {BEST_ASSISTANT_SALE} from '../actionTypes';

export default function (state=[], action){
    const {type, data} = action;
    switch(type){
        case BEST_ASSISTANT_SALE:
            return data
        default:
            return state;
    }
}