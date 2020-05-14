import * as NS from '../../namespace';
import { initial } from '../initial';

function dataReducer(state: NS.IReduxState['data'] = initial.data, action: NS.IAction): NS.IReduxState['data'] {
  switch (action.type) {
    case 'AUTHORIZATION:SIGN_UP': {
      // const { data, totalResults } = action.payload;
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}

export { dataReducer };
