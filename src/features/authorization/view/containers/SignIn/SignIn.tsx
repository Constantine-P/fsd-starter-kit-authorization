import React from 'react';
import { connect } from 'react-redux';

import { IAppReduxState } from 'shared/types/app';

import { actionCreators, selectors } from '../../../redux';
import { SignInCard } from '../../components';

interface IOwnProps {
  signIn: (object: {email: string, password: string}) => void;
  onSuccessSignIn: () => void;
  setUser: (user: string) => void;
  stateChanged: (object: {setUser: (user: string) => void}) => void;
}

const mapDispatch = {
  setUser: actionCreators.setUser,
  stateChanged: actionCreators.stateChanged,
  signIn: actionCreators.signIn,
};

interface IStateProps {
  error: string;
  user: string;
}

function mapState(state: IAppReduxState): IStateProps {
  return {
    error: selectors.selectCommunication(state, 'signIn').error,
    user: selectors.selectUser(state),
  };
}

type IProps = IOwnProps & IStateProps;

class SignInComponent extends React.Component<IProps> {
  componentDidMount() {
    const {
      user, onSuccessSignIn, stateChanged, setUser,
    } = this.props;
    stateChanged({ setUser });

    if (user) onSuccessSignIn();
  }

  componentDidUpdate() {
    const {
      user, onSuccessSignIn,
    } = this.props;

    if (user) onSuccessSignIn();
  }

  public render() {
    const { error } = this.props;
    return (
      <SignInCard
        onSubmit={this.handleSignIn}
        errorMessage={error.toString()}
      />
    );
  }

  private handleSignIn = (email: string, password: string) => {
    const { signIn } = this.props;
    signIn({ email, password });
  };
}

const SignIn = connect(mapState, mapDispatch)(SignInComponent);

export { SignIn, SignInComponent, IProps as ISignInProps };
