import {
    READY_FOR_TEST,
    TEST_IN_PROGRESS,
    TEST_FINISHED
} from './userStages';

const INITIAL_STATE = {
    userStage: READY_FOR_TEST
};

export default (state = INITIAL_STATE, action) => {
    console.log("next_screen");
    console.log(state);
    switch (action.type) {
        case 'next_screen':
            return getUserStage(action, state);
        default:
            return state;
    }
}

getUserStage = (action, state) => {
    switch (action.payload) {
        case READY_FOR_TEST:
            return { ...state, userStage: READY_FOR_TEST };
        case TEST_IN_PROGRESS:
            return { ...state, userStage: TEST_IN_PROGRESS };
        case TEST_FINISHED:
            return { ...state, userStage: TEST_FINISHED };
        default:
            return state;
    }
}