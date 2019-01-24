import data from '../questions.json';

const INITIAL_STATE = { curQuestionId: 0 };

export default (state = INITIAL_STATE, action) => {
    // console.log(action);
    switch (action.type) {
        case 'select_question':
            console.log("yess");
            return { ...state, curQuestionId: action.payload };
        default:
            console.log("nooo");
            return state
    }
}
