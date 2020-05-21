import { IAppReduxState } from 'shared/types/app';
import { IProfile } from 'shared/types/models';

function selectFeatureState(state: IAppReduxState) {
  return state;
}

export function selectProfile(state: IAppReduxState): IProfile {
  return selectFeatureState(state).profile.edit.profile;
}
