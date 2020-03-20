import React, { useReducer } from "react";
import axios from "axios";
import UrlShortenerContext from "./urlShortenerContext";
import UrlShortenerReducer from "./urlShortenerReducer";

import { SHORTEN_URL, SHORTEN_URL_SUCCESS, SHORTEN_URL_FAIL } from "../types";
import urlShortenerReducer from "./urlShortenerReducer";

const UrlShortenerState = props => {
    const initialState = {
        fullUrl: "",
        shortUrl: ""
    };

    const [state, dispatch] = useReducer(urlShortenerReducer, initialState);

    // GET SHORTENED URL

    const getShortUrl = async url => {
        // HEADERS
        const config = {
            headers: {
                "content-type": "application/json"
            }
        };

        // CREATE REQUEST
        const body = JSON.stringify({ fullUrl: url });
        console.log(body);

        try {
            const res = await axios.post(
                "http://localhost:8080/api/v1/url",
                body,
                config
            );

            const payload = {
                shortUrl: res.data.shortUrl,
                fullUrl: url
            };

            console.log(res.data);
            dispatch({ type: SHORTEN_URL_SUCCESS, payload: payload });
        } catch (error) {
            console.log(error);
            dispatch({ type: SHORTEN_URL_FAIL, payload: error });
        }
    };

    return (
        <UrlShortenerContext.Provider
            value={{
                fullUrl: state.fullUrl,
                shortUrl: state.shortUrl,
                getShortUrl
            }}
        >
            {props.children}
        </UrlShortenerContext.Provider>
    );
};

export default UrlShortenerState;
