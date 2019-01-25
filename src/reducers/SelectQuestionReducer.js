import data from '../questions.json';

const INITIAL_STATE = {
    questionId: 0,
    question: null,
    questionCount: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'next_question':
            console.log("next_question");
            return {
                ...state,
                questionId: state.questionId + 1,
                question: data[state.questionId],
                questionCount: data.length
            };
        default:
            console.log("nooo");
            return state;
    }
}
