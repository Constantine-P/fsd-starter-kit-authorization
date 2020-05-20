import React from 'react';
import block from 'bem-cn';
import { History } from 'history';
import { autobind } from 'core-decorators';

import * as features from 'features';

// import { routes } from '../../../routes';
// import { routes } from '../../../../Profile/routes';
// import { withAsyncFeatures } from 'core';
import { withAsyncFeatures } from '../../../../../core';
import { Layout } from '../../../../shared';

import './SignInLayout.scss';

// interface IState {
//
// }

interface IFeatureProps {
  authorizationFeatureEntry: features.authorization.Entry;
  history: History;
}

type IProps = IFeatureProps;

const b = block('sign-in-layout');

// eslint-disable-next-line react/prefer-stateless-function
class SignInLayoutComponent extends React.Component<IProps> {
  render() {
    const { authorizationFeatureEntry: { containers } } = this.props;
    const { SignIn } = containers;

    return (
      <Layout>
        <div className={b('inner')}>
          <SignIn onSuccessSignIn={this.redirectToProfile} />
        </div>
      </Layout>
    );
  }

  @autobind
  redirectToProfile(): void {
    console.log('Sign in redirectToProfile');
    // const { history } = this.props;
    // history.push(routes.profile.getRedirectPath());
  }
}

const SignInLayout = withAsyncFeatures({
  authorizationFeatureEntry: features.authorization.loadEntry,
})(SignInLayoutComponent);


export { SignInLayout, SignInLayoutComponent };
