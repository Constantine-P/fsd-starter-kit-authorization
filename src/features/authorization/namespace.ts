import { ICommunication, IAction, IPlainFailAction } from 'shared/types/redux';

export interface IReduxState {
  data: {
    user: string;
  };
  communication: {
    signUp: ICommunication;
    signIn: ICommunication;
  };
}

export type ISignUp = IAction<'AUTHORIZATION:SIGN_UP_USER', { email: string, password: string }>;
export type ISignUpSuccess = IAction<'AUTHORIZATION:SIGN_UP_SUCCESS', string>;
export type ISignUpFail = IPlainFailAction<'AUTHORIZATION:SIGN_UP_FAIL'>;

export type ISignIn = IAction<'AUTHORIZATION:SIGN_IN_USER', {email: string, password: string}>;
export type ISignInSuccess = IAction<'AUTHORIZATION:SIGN_IN_SUCCESS', string>;
export type ISignInFail = IPlainFailAction<'AUTHORIZATION:SIGN_IN_FAIL'>;

export type IAction =
  | ISignUp
  | ISignUpSuccess
  | ISignUpFail
  | ISignIn
  | ISignInSuccess
  | ISignInFail;
