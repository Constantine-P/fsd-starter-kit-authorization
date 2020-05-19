import React from 'react';
import block from 'bem-cn';

import * as features from 'features';
import { withAsyncFeatures } from 'core';

import { Layout } from '../../../../shared';
import './ProfileLayout.scss';

interface IFeatureProps {
  profileFeatureEntry: features.profile.Entry;
}

type IProps = IFeatureProps;

const b = block('profile-layout');

function ProfileLayoutComponent(props: IProps) {
  const { profileFeatureEntry: { containers } } = props;
  const { Profile } = containers;

  return (
    <Layout>
      <div className={b()}>
        <Profile />
      </div>
    </Layout>
  );
}

const ProfileLayout = withAsyncFeatures({
  profileFeatureEntry: features.profile.loadEntry,
})(ProfileLayoutComponent);

export { ProfileLayout, ProfileLayoutComponent, IProps as IProfileLayoutProps };
