const INITIAL_STATE = {

}

for (let index = 0; index < 20; index++) {
    INITIAL_STATE[index] = 0;
}

export default (state = INITIAL_STATE, action) => {
    console.log("personality reducer");
    console.log(state);
    switch (action.type) {
        case 'select_option':
            const { questionId, optionId } = action.payload
            return {...state, [questionId]: optionId};
        default:
            return state;
    }
}
