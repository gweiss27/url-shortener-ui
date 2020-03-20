import {
    SHORTEN_URL,
    SHORTEN_URL_SUCCESS,
    SHORTEN_URL_FAIL
} from "../types.js";

export default (state, action) => {
    switch (action.type) {
        case SHORTEN_URL:
        case SHORTEN_URL_SUCCESS:
            return {
                ...state,
                fullUrl: action.payload.fullUrl,
                shortUrl: action.payload.shortUrl
            };
        case SHORTEN_URL_FAIL:
        default:
            return state;
    }
};
