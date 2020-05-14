import { ICommunication, IAction, IPlainFailAction } from 'shared/types/redux';

export interface IReduxState {
  data: {
    user: string;
  };
  communication: {
    signUp: ICommunication;
  };
}

export type ISignUp = IAction<'AUTHORIZATION:SIGN_UP', { email: string, password: string }>;
export type ISignUpSuccess = IAction<'AUTHORIZATION:SIGN_UP_SUCCESS', { email: string, password: string }>;
export type ISignUpFail = IPlainFailAction<'AUTHORIZATION:SIGN_UP_FAIL'>;

export type IAction =
  | ISignUp
  | ISignUpSuccess
  | ISignUpFail;
