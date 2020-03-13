import { GET_CUSTOMERS, GET_CUSTOMER } from '../actionTypes';

export default function (state = [], action) {
    const { type, payload } = action;
    switch (type) {
        case GET_CUSTOMERS:
            return payload;
        case GET_CUSTOMER:
            return payload;
        default:
            return state;
    }
}