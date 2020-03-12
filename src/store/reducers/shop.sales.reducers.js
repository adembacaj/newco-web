import { SHOP_SALES } from '../actionTypes';

export default function (state = [], action) {
    const { type, data } = action;
    switch (type) {
        case SHOP_SALES:
            return data;
        default:
            return state;
    }
}