import { combineReducers } from 'redux';

import { communicationReducer } from './communication';
import { editReducer } from './edit';
import * as NS from '../../namespace';

export const reducer = combineReducers<NS.IReduxState>({
  profile: editReducer,
  communication: communicationReducer,
});
