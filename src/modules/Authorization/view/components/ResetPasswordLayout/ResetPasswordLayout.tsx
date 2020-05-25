import React from 'react';
import block from 'bem-cn';

import * as features from 'features';

import { withAsyncFeatures } from '../../../../../core';
import { Layout } from '../../../../shared';

import './ResetPasswordLayout.scss';

interface IFeatureProps {
  authorizationFeatureEntry: features.authorization.Entry;
}

type IProps = IFeatureProps;

const b = block('reset-password-layout');

function ResetPasswordLayoutComponent(props: IProps) {
  const { authorizationFeatureEntry: { containers } } = props;
  const { ResetPassword } = containers;

  return (
    <Layout>
      <div className={b('inner')}>
        <ResetPassword />
      </div>
    </Layout>
  );
}

const ResetPasswordLayout = withAsyncFeatures({
  authorizationFeatureEntry: features.authorization.loadEntry,
})(ResetPasswordLayoutComponent);


export { ResetPasswordLayout, ResetPasswordLayoutComponent };
