import React from 'react';
import block from 'bem-cn';
import { History } from 'history';
import { autobind } from 'core-decorators';

import * as features from 'features';

import { routes } from '../../../../Profile/routes';
// import { withAsyncFeatures } from 'core';
import { withAsyncFeatures } from '../../../../../core';
import { Layout } from '../../../../shared';

import './RestorePasswordLayout.scss';

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
class RestorePasswordLayoutComponent extends React.Component<IProps> {
  render() {
    const { authorizationFeatureEntry: { containers } } = this.props;
    const { RestorePassword } = containers;

    return (
      <Layout>
        <div className={b('inner')}>
          <RestorePassword onSuccessRestorePassword={this.redirectToAccount} />
        </div>
      </Layout>
    );
  }

  @autobind
  redirectToAccount(): void {
    const { history } = this.props;
    history.push(routes.profile.getRedirectPath());
  }
}

const RestorePasswordLayout = withAsyncFeatures({
  authorizationFeatureEntry: features.authorization.loadEntry,
})(RestorePasswordLayoutComponent);


export { RestorePasswordLayout, RestorePasswordLayoutComponent };
