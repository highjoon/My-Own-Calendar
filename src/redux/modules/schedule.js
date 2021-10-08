import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { firestore } from "../../shared/firebase";

// Connect Firebase
const scheduleDB = firestore.collection("schedules");

// Action Types
const LOAD_SCHEDULE = "schedule/LOAD_SCHEDULE";
const ADD_SCHEDULE = "schedule/ADD_SCHEDULE";
const DELETE_SCHEDULE = "schedule/DELETE_SCHEDULE";
const COMPLETE_SCHEDULE = "schedule/COMPLETE_SCHEDULE";
const SHOW_COMPLETE_SCHEDULE = "schedule/SHOW_COMPLETE_SCHEDULE";

// Action Creators
const loadSchedule = createAction(LOAD_SCHEDULE, (schedules) => ({ schedules }));
const addSchedule = createAction(ADD_SCHEDULE, (schedule) => ({ schedule }));
const deleteSchedule = createAction(DELETE_SCHEDULE, (id) => ({ id }));
const completeSchedule = createAction(COMPLETE_SCHEDULE, (id) => ({ id }));
const showCompleteSchedule = createAction(SHOW_COMPLETE_SCHEDULE);

// Thunk Creators
const loadScheduleFB = () => (dispatch, getState) => {
    scheduleDB.get().then((docs) => {
        let schedules = [];
        docs.forEach((doc) => {
            if (doc.exists) {
                schedules = [...schedules, { ...doc.data(), id: doc.id }];
            }
        });
        dispatch(loadSchedule(schedules));
    });
};

const addScheduleFB = (schedule) => (dispatch, getState) => {
    scheduleDB
        .add({ ...schedule })
        .then((doc) => {
            const _schedule = { ...schedule, id: doc.id };
            dispatch(addSchedule(_schedule));
        })
        .catch((err) => console.log(err));
};

const completeScheduleFB = (id) => (dispatch, getState) => {
    const data = getState().schedule.scheduleList.find((schedule) => schedule.id === id);
    scheduleDB
        .doc(id)
        .update({ is_complete: !data.is_complete })
        .then((res) => dispatch(completeSchedule(id)))
        .catch((err) => console.log(err));
};

const deleteScheduleFB = (id) => (dispatch, getState) => {
    scheduleDB.doc(id).delete();
    dispatch(deleteSchedule(id));
};

// Initial State
const initialState = {
    scheduleList: [],
    mode: "all",
};

// Reducer
export default handleActions(
    {
        [LOAD_SCHEDULE]: (state, action) =>
            produce(state, (draft) => {
                draft.scheduleList = action.payload.schedules;
            }),
        [ADD_SCHEDULE]: (state, action) =>
            produce(state, (draft) => {
                draft.scheduleList.push(action.payload.schedule);
            }),
        [DELETE_SCHEDULE]: (state, action) =>
            produce(state, (draft) => {
                draft.scheduleList = draft.scheduleList.filter((schedule) => schedule.id !== action.payload.id);
            }),
        [COMPLETE_SCHEDULE]: (state, action) =>
            produce(state, (draft) => {
                draft.scheduleList = draft.scheduleList.map((schedule) => {
                    if (schedule.id === action.payload.id) {
                        return { ...schedule, is_complete: !schedule.is_complete };
                    } else {
                        return schedule;
                    }
                });
            }),
        [SHOW_COMPLETE_SCHEDULE]: (state, action) =>
            produce(state, (draft) => {
                draft.mode = draft.mode === "all" ? "completed" : "all";
            }),
    },
    initialState
);

export const actionCreators = {
    loadScheduleFB,
    addScheduleFB,
    deleteScheduleFB,
    completeScheduleFB,
    showCompleteSchedule,
};
