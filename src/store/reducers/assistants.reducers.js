import { GET_ASSISTANTS, GET_ASSISTANT } from '../actionTypes';

export default function (state = [], action) {
    const { type, payload } = action;
    switch (type) {
        case GET_ASSISTANTS:
            return payload;
        case GET_ASSISTANT:
            return payload;
        default:
            return state;
    }
}