import { combineReducers } from 'redux';
import SelectQuestionReducer from './SelectQuestionReducer';
import UserFlowReducer from './UserFlowReducer';
import PersonalityTestReducer from './PersonalityTestReducer';

// Mapping reducer name to a method
export default combineReducers({
    selectQuestion: SelectQuestionReducer,
    userFlow: UserFlowReducer,
    personalityTest: PersonalityTestReducer
});