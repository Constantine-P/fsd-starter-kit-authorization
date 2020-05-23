import React from 'react';
import { connect } from 'react-redux';

import { IAppReduxState } from 'shared/types/app';

import { actionCreators, selectors } from '../../../redux';
import { SignUpCard } from '../../components';

interface IOwnProps {
  signUp: (object: {email: string, password: string}) => void;
  onSuccessSignUp: () => void;
  setUser: (user: string) => void;
  stateChanged: (object: {setUser: (user: string) => void}) => void;
}

const mapDispatch = {
  setUser: actionCreators.setUser,
  stateChanged: actionCreators.stateChanged,
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

class SignUpComponent extends React.Component<IProps> {
  componentDidMount() {
    const {
      user, onSuccessSignUp, stateChanged, setUser,
    } = this.props;
    stateChanged({ setUser });

    if (user) onSuccessSignUp();
  }

  componentDidUpdate() {
    const { user, onSuccessSignUp } = this.props;

    if (user) onSuccessSignUp();
  }

  public render() {
    return (
      <SignUpCard
        onSubmit={this.handleSignUp}
      />
    );
  }

  private handleSignUp = (email: string, password: string) => {
    const { signUp } = this.props;
    signUp({ email, password });
  };
}

const SignUp = connect(mapState, mapDispatch)(SignUpComponent);

export { SignUp, SignUpComponent, IProps as ISignUpProps };
