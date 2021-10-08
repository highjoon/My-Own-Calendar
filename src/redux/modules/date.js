import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

// Action Types
const SET_DATE = "date/SET_DATE";

// Action Creators
const setDate = createAction(SET_DATE, (date) => ({ date }));

// Initial State
const initialState = {
    now: dayjs(),
    date: dayjs(),
};

// Reducer
export default handleActions(
    {
        [SET_DATE]: (state, action) =>
            produce(state, (draft) => {
                draft.date = action.payload.date;
            }),
    },
    initialState
);

export const actionCreators = { setDate };
