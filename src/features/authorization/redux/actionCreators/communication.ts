import { makeCommunicationActionCreators } from 'redux-make-communication';

import * as NS from '../../namespace';

export const {
  execute: signUp,
  completed: signUpSuccess,
  failed: signUpFail,
} = makeCommunicationActionCreators<NS.ISignUp, NS.ISignUpSuccess, NS.ISignUpFail>(
  'AUTHORIZATION:SIGN_UP_USER',
  'AUTHORIZATION:SIGN_UP_SUCCESS',
  'AUTHORIZATION:SIGN_UP_FAIL',
);

export const {
  execute: signIn,
  completed: signInSuccess,
  failed: signInFail,
} = makeCommunicationActionCreators<NS.ISignIn, NS.ISignInSuccess, NS.ISignInFail>(
  'AUTHORIZATION:SIGN_IN_USER',
  'AUTHORIZATION:SIGN_IN_SUCCESS',
  'AUTHORIZATION:SIGN_IN_FAIL',
);
