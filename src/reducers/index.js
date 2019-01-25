import { combineReducers } from 'redux';
import QuestionReducer from './QuestionsReducer';
import SelectQuestionReducer from './SelectQuestionReducer';

// Mapping reducer name to a method
export default combineReducers({
    questions: QuestionReducer,
    selectQuestion: SelectQuestionReducer
});