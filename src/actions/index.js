import { READY_FOR_TEST, TEST_IN_PROGRESS, TEST_FINISHED } from '../reducers/userStages';

export const nextQuestion = () => {
    return {
        type: 'next_question',
        payload: null
    }
}

export const nextScreen = () => {
    return {
        type: 'next_screen',
        payload: null
    }
}

export const selectOption = ({ questionId, optionId }) => {
    return {
        type: 'select_option',
        payload: {
            questionId: questionId,
            optionId: optionId
        }
    }
}
