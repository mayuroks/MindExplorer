import data from '../questions.json';

const INITIAL_STATE = {
    questionId: 0,
    question: null,
    questionCount: 0
};

export default (state = INITIAL_STATE, action) => {
    console.log(state);
    switch (action.type) {
        case 'select_question':
            console.log("yess");
            return { ...state, questionId: action.payload, question: data[action.payload], questionCount: data.length };
        default:
            console.log("nooo");
            return state;
    }
}
