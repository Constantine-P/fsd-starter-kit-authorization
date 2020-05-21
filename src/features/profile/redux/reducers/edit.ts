import * as NS from '../../namespace';
import { initial } from '../initial';

function editReducer(state: NS.IReduxState['edit'] = initial.edit, action: NS.IAction): NS.IReduxState['edit'] {
  switch (action.type) {
    case 'PROFILE:SAVE_PROFILE': {
      return {
        ...state,
        profile: action.payload,
      };
    }
    case 'PROFILE:SET_USER': {
      return {
        ...state,
        profile: { ...state.profile, name: action.payload },
      };
    }
    default:
      return state;
  }
}

export { editReducer };
