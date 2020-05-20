import * as NS from '../../namespace';
import { initial } from '../initial';

function dataReducer(state: NS.IReduxState['data'] = initial.data, action: NS.IAction): NS.IReduxState['data'] {
  switch (action.type) {
    case 'AUTHORIZATION:SIGN_UP_SUCCESS': {
      return {
        ...state,
        user: action.payload,
      };
    }
    case 'AUTHORIZATION:SET_USER': {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
}

export { dataReducer };
