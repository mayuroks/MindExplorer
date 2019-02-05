import data from '../questions.json';

const INITIAL_STATE = {
    questionId: -1,
    question: null,
    questionCount: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'next_question':
            const questionId = state.questionId + 1;
            return {
                ...state,
                questionId: questionId,
                question: data[questionId],
                questionCount: data.length
            };
        case 'test_again':
            state = INITIAL_STATE;
            return state;
        default:
            return state;
    }
}
