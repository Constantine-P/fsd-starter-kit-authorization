import React from 'react';
import block from 'bem-cn';

import './Button.scss';

const b = block('button');

interface IProps {
  value: string;
  onClick?: () => void;
}

function Button(props: IProps) {
  const { value, onClick } = props;
  return (
    <button
      className={b()}
      type="submit"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export { Button };
