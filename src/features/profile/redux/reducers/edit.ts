import * as NS from '../../namespace';
import { initial } from '../initial';

function editReducer(state: NS.IReduxState['profile'] = initial.profile, action: NS.IAction): NS.IReduxState['profile'] {
  switch (action.type) {
    // case 'PROFILE:SAVE_PROFILE': {
    //   return {
    //     ...state,
    //     profile: action.payload,
    //   };
    // }
    case 'PROFILE:SET_USER': {
      return {
        ...state,
        name: action.payload,
      };
    }
    default:
      return state;
  }
}

export { editReducer };
