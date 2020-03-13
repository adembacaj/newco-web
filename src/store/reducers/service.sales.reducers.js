import { SERVICE_SALES } from '../actionTypes';

export default function (state = [], action) {
    const { type, data } = action;
    switch (type) {
        case SERVICE_SALES:
            return data
        default:
            return state;
    }
}