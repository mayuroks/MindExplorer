export const selectQuestionById = (questionId) => {
    return {
        type: 'select_question',
        payload: questionId
    }
}