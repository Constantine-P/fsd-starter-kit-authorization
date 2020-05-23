import { SagaIterator } from 'redux-saga';
import { put, call, takeLatest } from 'redux-saga/effects';

import { IDependencies } from 'shared/types/app';

import * as NS from '../namespace';
import * as actionCreators from './actionCreators';

function getSaga(deps: IDependencies) {
  const stateChangedType: NS.IStateChanged['type'] = 'PROFILE:STATE_CHANGED';
  const signOutType: NS.ISignOut['type'] = 'PROFILE:SIGN_OUT';

  return function* saga(): SagaIterator {
    yield takeLatest(stateChangedType, executeStateChanged, deps);
    yield takeLatest(signOutType, executeSignOut, deps);
  };
}

function* executeStateChanged({ api }: IDependencies, { payload }: NS.IStateChanged) {
  try {
    const { setUser } = payload;
    yield call(api.stateChanged, setUser);
    yield put(actionCreators.stateChangedSuccess());
  } catch (error) {
    yield put(actionCreators.stateChangedFail(error));
  }
}

function* executeSignOut({ api }: IDependencies) {
  try {
    yield call(api.signOut);
    yield put(actionCreators.signOutSuccess());
  } catch (error) {
    yield put(actionCreators.signOutFail(error));
  }
}

export { getSaga };
