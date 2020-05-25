import React from 'react';
import { connect } from 'react-redux';

import { IAppReduxState } from 'shared/types/app';

import { actionCreators, selectors } from '../../../redux';
import { ResetPasswordCard } from '../../components';

interface IOwnProps {
  resetPassword: (object: {email: string}) => void;
}

interface IStateProps {
  error: string;
  isRequesting: boolean;
}

function mapState(state: IAppReduxState): IStateProps {
  return {
    error: selectors.selectCommunication(state, 'resetPassword').error,
    isRequesting: selectors.selectCommunication(state, 'resetPassword').isRequesting,
  };
}

const mapDispatch = {
  resetPassword: actionCreators.resetPassword,
};

type IProps = IOwnProps & IStateProps;

class ResetPasswordComponent extends React.Component<IProps> {
  state = {
    isEmailSent: false,
  };

  public render() {
    const { error, isRequesting } = this.props;
    const { isEmailSent } = this.state;
    const message = (isEmailSent && !isRequesting && error === '')
      ? 'Письмо отправлено'
      : error.toString();

    return (
      <ResetPasswordCard
        onSubmit={this.handleResetPassword}
        errorMessage={message}
      />
    );
  }

  private handleResetPassword = (email: string) => {
    const { resetPassword } = this.props;
    resetPassword({ email });
    this.setState({
      isEmailSent: true,
    });
  };
}

const ResetPassword = connect(mapState, mapDispatch)(ResetPasswordComponent);

export { ResetPassword, ResetPasswordComponent, IProps as IResetPasswordProps };
