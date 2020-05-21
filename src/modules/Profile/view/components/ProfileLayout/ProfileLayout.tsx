import React from 'react';
import block from 'bem-cn';
import { History } from 'history';

import * as features from 'features';
import { withAsyncFeatures } from 'core';

import { Layout } from '../../../../shared';
import './ProfileLayout.scss';

interface IFeatureProps {
  profileFeatureEntry: features.profile.Entry;
  history: History;
}

type IProps = IFeatureProps;

const b = block('profile-layout');

class ProfileLayoutComponent extends React.Component<IProps> {
  render() {
    const { profileFeatureEntry: { containers } } = this.props;
    const { Profile } = containers;

    return (
      <Layout>
        <div className={b()}>
          <Profile redirectToRoot={this.redirectToRoot} />
        </div>
      </Layout>
    );
  }

  redirectToRoot = () => {
    const { history } = this.props;
    history.push('/');
  };
}

const ProfileLayout = withAsyncFeatures({
  profileFeatureEntry: features.profile.loadEntry,
})(ProfileLayoutComponent);

export { ProfileLayout, ProfileLayoutComponent, IProps as IProfileLayoutProps };
