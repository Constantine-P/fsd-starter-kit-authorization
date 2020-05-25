import React from 'react';
import block from 'bem-cn';
import { History } from 'history';

import * as features from 'features';

import { routes } from '../../../../Profile/routes';
import { withAsyncFeatures } from '../../../../../core';
import { Layout } from '../../../../shared';

import './SignUpLayout.scss';

interface IFeatureProps {
  authorizationFeatureEntry: features.authorization.Entry;
  history: History;
}

type IProps = IFeatureProps;

const b = block('sign-up-layout');

class SignUpLayoutComponent extends React.Component<IProps> {
  render() {
    const { authorizationFeatureEntry: { containers } } = this.props;
    const { SignUp } = containers;

    return (
      <Layout>
        <div className={b('inner')}>
          <SignUp onSuccessSignUp={this.redirectToProfile} />
        </div>
      </Layout>
    );
  }

  redirectToProfile = (): void => {
    const { history } = this.props;
    history.push(routes.profile.getRedirectPath());
  };
}

const SignUpLayout = withAsyncFeatures({
  authorizationFeatureEntry: features.authorization.loadEntry,
})(SignUpLayoutComponent);


export { SignUpLayout, SignUpLayoutComponent };
