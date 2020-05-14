import React from 'react';
import block from 'bem-cn';

import './Button.scss';

const b = block('button');

interface IProps {
  value: string;
}

interface IState {

}

class Button extends React.Component<IProps> {
  state: IState = {
  };

  render() {
    const { value } = this.props;
    return (
      <button
        className={b()}
        type="submit"
      >
        {value}
      </button>
    );
  }
}

export { Button };
