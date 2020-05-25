import React from 'react';
import block from 'bem-cn';

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
