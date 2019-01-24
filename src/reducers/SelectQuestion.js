import data from '../questions.json';

const INITIAL_STATE = { curQuestionId: 0, question: null };

export default (state = INITIAL_STATE, action) => {
    console.log(state);
    switch (action.type) {
        case 'select_question':
            console.log("yess");
            return { ...state, curQuestionId: action.payload, question: data[action.payload] };
        default:
            console.log("nooo");
            return state
    }
}
