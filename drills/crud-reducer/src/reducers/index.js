import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from '../actions';

const initialState = {
  items: []
};

export const crudReducer = (state = initialState, action) => {
  console.log(state);
  // Add code which handles each action here
  if (action.type === ADD_ITEM) {
    return Object.assign({}, state, {
      items: [...state.items, action.item]
    });
  } else if (action.type === UPDATE_ITEM) {
    return Object.assign({}, state, {
      items: state.items.map(item => {
        if (action.item.id === item.id) {
          return action.item;
        }
        return item;
      })
    });
  } else if (action.type === DELETE_ITEM) {
    return Object.assign({}, state, {
      items: state.items.filter(item => {
        if (action.item.id !== item.id) {
          return true;
        }
        return false;
      })
    });
  }
  return state;
};
