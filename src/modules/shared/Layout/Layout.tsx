import React from 'react';
import block from 'bem-cn';

// import * as features from 'features';

// import './Layout.scss';

// interface IOwnProps {
//   title: string;
// }
//
// interface IFeatureProps {
//   profileFeatureEntry: features.profile.Entry;
// }

interface IProps {
  children: React.ReactNode;
}

const b = block('layout');

function Layout(props: IProps) {
  const { children } = props;

  return (
    <div className={b()}>
      <div className={b('inner')}>
        {children}
      </div>
    </div>
  );
}

export { Layout };
