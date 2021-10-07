import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// Action Types
const SET_SCHEDULE = "schedule/SET_SCHEDULE";

// Action Creators
const setSchedule = createAction(SET_SCHEDULE, (schedule) => ({ schedule }));

// Initial State
const initialState = {
    schedule: {
        title: "타이틀",
        date: [2021, 10, 5],
        desc: "설명",
    },
};

// Reducer
export default handleActions(
    {
        [SET_SCHEDULE]: (state, action) =>
            produce(state, (draft) => {
                draft.schedule = action.payload.schedule;
            }),
    },
    initialState
);

export const actionCreators = {
    setSchedule,
};
