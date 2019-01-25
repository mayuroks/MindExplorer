import data from '../questions.json';

const INITIAL_STATE = {
    questionId: 0,
    question: null,
    questionCount: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'next_question':
            return {
                ...state,
                questionId: state.questionId + 1,
                question: data[state.questionId],
                questionCount: data.length
            };
        default:
            return state;
    }
}
