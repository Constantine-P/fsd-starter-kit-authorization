import React from 'react';
import block from 'bem-cn';

import { isEmailValid } from '../../../validators';

import './EmailField.scss';

const b = block('email-field');

interface IProps {
  value: string;
  onChange: (value: string) => void
}

interface IState {
  isValid: boolean;
  message: string;
}

class EmailField extends React.Component<IProps, IState> {
  state: IState = {
    isValid: true,
    message: '',
  };

  render() {
    const { value } = this.props;
    const { isValid, message } = this.state;
    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label className={b()}>
        <h2 className={b('title')}>Email</h2>
        {
          isValid
            ? null
            : (
              <span className={b('error-message')}>
                {message}
              </span>
            )
        }
        <input
          className={b('input')}
          type="email"
          placeholder="ivanova@mail.com"
          value={value}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          required
        />
      </label>
    );
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const { value } = event.target;
    onChange(value);
    this.setState(isEmailValid(value));
  };

  handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setState(isEmailValid(value));
  };
}

export { EmailField };
