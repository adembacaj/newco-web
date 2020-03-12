import {PRODUCT_OUT_OF_STOCKS} from '../actionTypes';

export default function (state=[], action){
    const {type, data} = action;
    switch(type){
        case PRODUCT_OUT_OF_STOCKS:
            return data
        default:
            return state;
    }
}