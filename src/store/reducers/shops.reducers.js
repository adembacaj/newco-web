import { GET_SHOPS, GET_SHOP } from '../actionTypes';

export default function (state = [], action) {
    const { type, payload } = action;
    switch (type) {
        case GET_SHOPS:
            return payload;
        case GET_SHOP:
            return payload;
        default:
            return state;
    }
}