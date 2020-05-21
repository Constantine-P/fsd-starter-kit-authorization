import React from 'react';
import block from 'bem-cn';

import './Button.scss';

const b = block('button');

interface IProps {
  value: string;
  onClick?: () => void;
}

interface IState {

}

class Button extends React.Component<IProps> {
  state: IState = {
  };

  render() {
    const { value, onClick } = this.props;
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
}

export { Button };
