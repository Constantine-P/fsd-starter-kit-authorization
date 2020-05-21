import { profile } from '../constants';
import { IReduxState } from '../namespace';
import { initialCommunicationField } from '../../../shared/constants';

const initial: IReduxState = {
  edit: {
    profile,
  },
  communication: {
    stateChanged: initialCommunicationField,
    signOut: initialCommunicationField,
  },
};

export { initial };
