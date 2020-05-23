import { IProfile } from 'shared/types/models';
import { IAction, IPlainAction, IPlainFailAction, ICommunication } from 'shared/types/redux';

export interface IReduxState {
  profile: IProfile;
  communication: {
    stateChanged: ICommunication;
    signOut: ICommunication;
  }
}

export type IProfileEditFormFields = IProfile;

export type ISaveProfile = IAction<'PROFILE:SAVE_PROFILE', IProfileEditFormFields>;

export type ISetUser = IAction<'PROFILE:SET_USER', string>;

export type IStateChanged = IAction<'PROFILE:STATE_CHANGED', {setUser: (user: string) => any}>;
export type IStateChangedSuccess = IAction<'PROFILE:STATE_CHANGED_SUCCESS', void>;
export type IStateChangedFail = IPlainFailAction<'PROFILE:STATE_CHANGED_FAIL'>;

export type ISignOut = IPlainAction<'PROFILE:SIGN_OUT'>;
export type ISignOutSuccess = IAction<'PROFILE:SIGN_OUT_SUCCESS', void>;
export type ISignOutFail = IPlainFailAction<'PROFILE:SIGN_OUT_FAIL'>;

export type IAction =
  ISaveProfile
  | IStateChanged
  | IStateChangedSuccess
  | IStateChangedFail
  | ISignOut
  | ISignOutSuccess
  | ISignOutFail
  | ISetUser;
