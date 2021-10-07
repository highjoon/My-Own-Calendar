import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// Action Types
const SHOW_MODAL = "schedule/SHOW_MODAL";
const CLOSE_MODAL = "schedule/CLOSE_MODAL";

// Action Creators
const showModal = createAction(SHOW_MODAL, (is_upload) => ({ is_show: true, is_upload }));
const closeModal = createAction(CLOSE_MODAL, () => ({ is_show: false }));

// Initial State
const initialState = {
    is_show: false,
    is_upload: "",
};

// Reducer
export default handleActions(
    {
        [SHOW_MODAL]: (state, action) =>
            produce(state, (draft) => {
                draft.is_show = true;
                draft.is_upload = action.payload.is_upload;
            }),
        [CLOSE_MODAL]: (state, action) =>
            produce(state, (draft) =>
                produce(state, (draft) => {
                    draft.is_show = false;
                })
            ),
    },
    initialState
);

export const actionCreators = {
    showModal,
    closeModal,
};
