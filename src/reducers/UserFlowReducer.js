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
        case 'test_again':
            return getUserStage(state);
        default:
            return state;
    }
}

getUserStage = (state) => {
    switch (state.userStage) {
        case READY_FOR_TEST:
            return { ...state, userStage: TEST_IN_PROGRESS };
        case TEST_IN_PROGRESS:
            return { ...state, userStage: TEST_FINISHED };
        case TEST_FINISHED:
            return { ...state, userStage: READY_FOR_TEST };
        default:
            return state;
    }
}