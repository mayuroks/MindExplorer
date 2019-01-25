import { READY_FOR_TEST, TEST_IN_PROGRESS, TEST_FINISHED } from '../reducers/userStages';

export const nextQuestion = () => {
    return {
        type: 'next_question',
        payload: null
    }
}

export const nextScreen = (userStage) => {
    switch (userStage) {
        case READY_FOR_TEST:
            return {
                type: 'next_screen',
                payload: TEST_IN_PROGRESS
            }
        case TEST_IN_PROGRESS:
            return {
                type: 'next_screen',
                payload: TEST_FINISHED
            }
        default:
            return {
                type: 'next_screen',
                payload: TEST_IN_PROGRESS
            }
    }
}