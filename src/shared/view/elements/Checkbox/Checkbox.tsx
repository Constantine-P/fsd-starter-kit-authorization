import React from 'react';
import block from 'bem-cn';

import './Checkbox.scss';

const b = block('checkbox');

interface IProps {
  text: string;
}

interface IState {

}

class Checkbox extends React.Component<IProps> {
  state: IState = {
  };

  render() {
    const { text } = this.props;
    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label className={b()}>
        <input className={b('check')} type="checkbox" />
        <div className={b('check-view')} />
        <p className={b('description')}>{text}</p>
      </label>
    );
  }
}

export { Checkbox };
