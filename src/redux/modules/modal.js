import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// Action Types
const SHOW_MODAL = "schedule/SHOW_MODAL";
const CLOSE_MODAL = "schedule/CLOSE_MODAL";

// Action Creators
const showModal = createAction(SHOW_MODAL, () => ({}));
const closeModal = createAction(CLOSE_MODAL, () => ({}));

// Initial State
const initialState = {};

// Reducer
export default handleActions(
    {
        [SHOW_MODAL]: (state, action) => produce(state, (draft) => {}),
        [CLOSE_MODAL]: (state, action) => produce(state, (draft) => {}),
    },
    initialState
);

export const actionCreators = {
    showModal,
    closeModal,
};
