import { makeCommunicationActionCreators } from 'redux-make-communication';

import * as NS from '../../namespace';

export const {
  execute: signUp,
  completed: signUpSuccess,
  failed: signUpFail,
} = makeCommunicationActionCreators<NS.ISignUp, NS.ISignUpSuccess, NS.ISignUpFail>(
  'AUTHORIZATION:SIGN_UP',
  'AUTHORIZATION:SIGN_UP_SUCCESS',
  'AUTHORIZATION:SIGN_UP_FAIL',
);

export const {
  execute: signIn,
  completed: signInSuccess,
  failed: signInFail,
} = makeCommunicationActionCreators<NS.ISignIn, NS.ISignInSuccess, NS.ISignInFail>(
  'AUTHORIZATION:SIGN_IN',
  'AUTHORIZATION:SIGN_IN_SUCCESS',
  'AUTHORIZATION:SIGN_IN_FAIL',
);

export const {
  execute: stateChanged,
  completed: stateChangedSuccess,
  failed: stateChangedFail,
} = makeCommunicationActionCreators<NS.IStateChanged, NS.IStateChangedSuccess,
NS.IStateChangedFail>(
  'AUTHORIZATION:STATE_CHANGED',
  'AUTHORIZATION:STATE_CHANGED_SUCCESS',
  'AUTHORIZATION:STATE_CHANGED_FAIL',
);
