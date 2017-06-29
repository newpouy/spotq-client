import * as types from '../actions/ActionTypes';

const initialState = {
    data : {

    }
};

export default function board(state, action){
    if(typeof state === "undefined") {
        state = initialState;
    }
    return state;
};