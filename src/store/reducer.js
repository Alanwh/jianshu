import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_INPUT_VALUE}  from './ActionTypes';
const defaultState = {
    inputValue: '',
    list: [1,2,3]
};

const reducer = (state = defaultState,action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case CHANGE_INPUT_VALUE:
            newState.inputValue = action.value;
            return newState;
        case ADD_TODO_ITEM:
            newState.list = [...state.list,newState.inputValue];
            newState.inputValue = '';
            return newState;
        case DELETE_INPUT_VALUE:
            newState.list.splice(action.index,1);
            return newState;
        default:
            return state;
    }
}

export default reducer;