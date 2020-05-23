import { makeCommunicationActionCreators } from 'redux-make-communication';

import * as NS from '../../namespace';

export const {
  execute: stateChanged,
  completed: stateChangedSuccess,
  failed: stateChangedFail,
} = makeCommunicationActionCreators<NS.IStateChanged, NS.IStateChangedSuccess,
NS.IStateChangedFail>(
  'PROFILE:STATE_CHANGED',
  'PROFILE:STATE_CHANGED_SUCCESS',
  'PROFILE:STATE_CHANGED_FAIL',
);

export const {
  execute: signOut,
  completed: signOutSuccess,
  failed: signOutFail,
} = makeCommunicationActionCreators<NS.ISignOut, NS.ISignOutSuccess, NS.ISignOutFail>(
  'PROFILE:SIGN_OUT',
  'PROFILE:SIGN_OUT_SUCCESS',
  'PROFILE:SIGN_OUT_FAIL',
);
