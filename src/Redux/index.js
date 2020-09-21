import {combineReducers} from 'redux';
import {reducer as network} from 'react-native-offline';

const rootReducer = combineReducers({
  blank: (state = null) => state,
  network,
});

export default rootReducer;
