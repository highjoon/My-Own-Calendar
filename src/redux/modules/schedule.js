import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// Action Types
const SET_MODAL = "schedule/SET_MODAL";

// Action Creators
const setModal = createAction(SET_MODAL, (is_open) => ({ is_open }));

// Initial State
const initialState = {
    is_open: false,
};

// Reducer
export default handleActions(
    {
        [SET_MODAL]: (state, action) =>
            produce(state, (draft) => {
                draft.is_open = action.payload.is_open;
            }),
    },
    initialState
);

export const actionCreators = {
    setModal,
};
