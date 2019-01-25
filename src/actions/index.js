export const selectQuestionById = (questionId) => {
    return {
        type: 'select_question',
        payload: questionId
    }
}

export const nextQuestion = () => {
    return {
        type: 'next_question',
        payload: null
    }
}