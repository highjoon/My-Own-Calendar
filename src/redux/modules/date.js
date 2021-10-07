import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import dayjs from "dayjs";

// Action Types
const SET_NOW = "date/SET_NOW";
const SET_DATE = "date/SET_DATE";

// Action Creators
const setNow = createAction(SET_NOW, () => ({ now: dayjs() }));
const setDate = createAction(SET_DATE, (date) => ({ date }));

// Initial State
const initialState = {
    now: dayjs(),
    date: dayjs(),
};

// Reducer
export default handleActions(
    {
        [SET_NOW]: (state, action) =>
            produce(state, (draft) => {
                draft.now = action.payload.now;
            }),
        [SET_DATE]: (state, action) =>
            produce(state, (draft) => {
                draft.date = action.payload.date;
            }),
    },
    initialState
);

export const actionCreators = {
    setDate,
};
