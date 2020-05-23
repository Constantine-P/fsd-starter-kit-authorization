import { makeCommunicationReducer } from 'redux-make-communication';
import { combineReducers } from 'redux';

import * as NS from '../../namespace';
import { initial } from '../initial';

export const communicationReducer = combineReducers<NS.IReduxState['communication']>({
  signUp: makeCommunicationReducer<NS.ISignUp, NS.ISignUpSuccess, NS.ISignUpFail>(
    'AUTHORIZATION:SIGN_UP',
    'AUTHORIZATION:SIGN_UP_SUCCESS',
    'AUTHORIZATION:SIGN_UP_FAIL',
    initial.communication.signUp,
  ),
  signIn: makeCommunicationReducer<NS.ISignIn, NS.ISignInSuccess, NS.ISignInFail>(
    'AUTHORIZATION:SIGN_IN',
    'AUTHORIZATION:SIGN_IN_SUCCESS',
    'AUTHORIZATION:SIGN_IN_FAIL',
    initial.communication.signIn,
  ),
  stateChanged: makeCommunicationReducer<
  NS.IStateChanged,
  NS.IStateChangedSuccess,
  NS.IStateChangedFail
  >(
    'AUTHORIZATION:STATE_CHANGED',
    'AUTHORIZATION:STATE_CHANGED_SUCCESS',
    'AUTHORIZATION:STATE_CHANGED_FAIL',
    initial.communication.stateChanged,
  ),
});
