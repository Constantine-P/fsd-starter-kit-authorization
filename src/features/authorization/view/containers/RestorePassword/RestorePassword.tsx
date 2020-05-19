import React from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';

import { IAppReduxState } from 'shared/types/app';

import { actionCreators, selectors } from '../../../redux';
import { RestorePasswordCard } from '../../components';


interface IOwnProps {
  signUp: (object: {email: string, password: string}) => void;
  onSuccessRestorePassword: () => void;
}

const mapDispatch = {
  signUp: actionCreators.signUp,
};

interface IStateProps {
  error: string | {code: string};
  user: string;
}

function mapState(state: IAppReduxState): IStateProps {
  return {
    error: selectors.selectCommunication(state, 'signUp').error,
    user: selectors.selectUser(state),
  };
}

type IProps = IOwnProps & IStateProps;

@autobind
class RestorePasswordComponent extends React.Component<IProps> {
  componentDidMount() {
    const { user, onSuccessRestorePassword } = this.props;

    if (user) {
      onSuccessRestorePassword();
    }
  }

  componentDidUpdate() {
    const { user, onSuccessRestorePassword } = this.props;

    if (user) {
      onSuccessRestorePassword();
    }
  }

  public render() {
    return (
      <RestorePasswordCard />
    );
  }

  // private handleRestorePassword(email: string, password: string) {
  //   const { signUpUser } = this.props;
  //   signUpUser({ email, password });
  // }
}

const RestorePassword = connect(mapState, mapDispatch)(RestorePasswordComponent);

export { RestorePassword, RestorePasswordComponent, IProps as IRestorePasswordProps };
