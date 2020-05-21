import { makeCommunicationReducer } from 'redux-make-communication';
import { combineReducers } from 'redux';

import * as NS from '../../namespace';
import { initial } from '../initial';

export const communicationReducer = combineReducers<NS.IReduxState['communication']>({
  stateChanged: makeCommunicationReducer<
  NS.IStateChanged,
  NS.IStateChangedSuccess,
  NS.IStateChangedFail
  >(
    'PROFILE:STATE_CHANGED',
    'PROFILE:STATE_CHANGED_SUCCESS',
    'PROFILE:STATE_CHANGED_FAIL',
    initial.communication.stateChanged,
  ),
  signOut: makeCommunicationReducer<
  NS.ISignOut,
  NS.ISignOutSuccess,
  NS.ISignOutFail
  >(
    'PROFILE:SIGN_OUT',
    'PROFILE:SIGN_OUT_SUCCESS',
    'PROFILE:SIGN_OUT_FAIL',
    initial.communication.signOut,
  ),
});
