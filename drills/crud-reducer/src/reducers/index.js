import {ADD_ITEM, UPDATE_ITEM, DELETE_ITEM} from '../actions';

const initialState = {
    items: []
};

export const crudReducer = (state=initialState, action) => {
    // Add code which handles each action here
    if (action.type === ADD_ITEM) {
    }
    else if (action.type === UPDATE_ITEM) {
    }
    else if (action.type === DELETE_ITEM) {
    }
    return state;
};
