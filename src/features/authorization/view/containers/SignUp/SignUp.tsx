import React from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';

import { IAppReduxState } from 'shared/types/app';

import { actionCreators, selectors } from '../../../redux';
import { SignUpCard } from '../../components';


interface IOwnProps {
  signUp: (object: {email: string, password: string}) => void;
  onSuccessSignUp: () => void;
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
class SignUpComponent extends React.Component<IProps> {
  componentDidMount() {
    const { user, onSuccessSignUp } = this.props;

    if (user) {
      onSuccessSignUp();
    }
  }

  componentDidUpdate() {
    const { user, onSuccessSignUp } = this.props;

    if (user) {
      onSuccessSignUp();
    }
  }

  public render() {
    return (
      <SignUpCard />
    );
  }

  // private handleSignUp(email: string, password: string) {
  //   const { signUpUser } = this.props;
  //   signUpUser({ email, password });
  // }
}

const SignUp = connect(mapState, mapDispatch)(SignUpComponent);

export { SignUp, SignUpComponent, IProps as ISignUpProps };
