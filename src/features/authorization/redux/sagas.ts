import { SagaIterator } from 'redux-saga';
import { put, call, takeLatest } from 'redux-saga/effects';

import { IDependencies } from 'shared/types/app';

import * as NS from '../namespace';
import * as actionCreators from './actionCreators';

interface IResponse {
  user: {email: string}
}

function getSaga(deps: IDependencies) {
  const signUpType: NS.ISignUp['type'] = 'AUTHORIZATION:SIGN_UP';
  const signInType: NS.ISignIn['type'] = 'AUTHORIZATION:SIGN_IN';
  const stateChangedType: NS.IStateChanged['type'] = 'AUTHORIZATION:STATE_CHANGED';

  return function* saga(): SagaIterator {
    yield takeLatest(signUpType, executeSignUp, deps);
    yield takeLatest(signInType, executeSignIn, deps);
    yield takeLatest(stateChangedType, executeStateChanged, deps);
  };
}

function* executeSignUp({ api }: IDependencies, { payload }: NS.ISignIn) {
  try {
    const { email, password } = payload;
    const response: IResponse = yield call(api.signUp, email, password);
    const { user } = response;
    yield put(actionCreators.signUpSuccess(user.email));
  } catch (error) {
    yield put(actionCreators.signUpFail(error));
  }
}

function* executeSignIn({ api }: IDependencies, { payload }: NS.ISignIn) {
  try {
    const { email, password } = payload;
    const response: IResponse = yield call(api.signIn, email, password);
    const { user } = response;
    yield put(actionCreators.signInSuccess(user.email));
  } catch (error) {
    yield put(actionCreators.signInFail(error));
  }
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

export { getSaga };
