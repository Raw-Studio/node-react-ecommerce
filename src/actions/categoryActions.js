import {
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAIL,
} from '../constants/productConstants';
import axios from 'axios';
import Axios from 'axios';

const URL_CATEGORIES = 'http://localhost:8080/api/categories/'
const listProducts = (
) => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_LIST_REQUEST });
        const { data } = await axios.get(
            `${URL_CATEGORIES}`
        );
        dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CATEGORY_LIST_FAIL, payload: error.message });
    }
};


export {
    listProducts
};
