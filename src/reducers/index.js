import { combineReducers } from 'redux';
import QuestionReducer from './QuestionsReducer';
import SelectQuestion from './SelectQuestion';

// Mapping reducer name to a method
export default combineReducers({
    questions: QuestionReducer,
    selectionQuestion: SelectQuestion
});