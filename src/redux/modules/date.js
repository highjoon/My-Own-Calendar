import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
// import { firestore, storage } from "../../shared/firebase";
import "moment";
import moment from "moment";

const SET_DATE = "SET_DATE";

const setDate = createAction(SET_DATE, (date) => ({ date }));

const initialState = {
    date_list: [],
};

export default handleActions(
    {
        [SET_DATE]: (state, action) => {
            produce(state, (draft) => {
                draft.date_list.push(...action.payload.date);
            });
        },
    },
    initialState
);

const actionCreators = {
    setDate,
};

export { actionCreators };
