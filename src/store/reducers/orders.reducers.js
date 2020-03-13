import { GET_ORDERS, GET_ORDER } from '../actionTypes';

export default function (state = [], action) {
    const { type, payload } = action;
    switch (type) {
        case GET_ORDERS:
            return payload;
        case GET_ORDER:
            return payload;
        default:
            return state;
    }
}