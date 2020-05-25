import React from 'react';
import block from 'bem-cn';

import { isEmailValid } from '../../../validators';

import './EmailField.scss';

const b = block('email-field');

interface IProps {
  value: string;
  onChange: (value: string) => void;
  setValidity?: (value: boolean | null) => void;
  validate?: boolean;
}

interface IState {
  isValid: boolean | null;
  message: string;
}

class EmailField extends React.Component<IProps, IState> {
  state: IState = {
    isValid: null,
    message: '',
  };

  render() {
    const { value, validate } = this.props;
    const { isValid, message } = this.state;
    // eslint-disable-next-line no-nested-ternary
    const inputMode = (isValid === true && validate)
      ? { valid: true }
      : (isValid === false && validate)
        ? { invalid: true }
        : { invalid: false };

    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label className={b()}>
        <h2 className={b('title')}>Email</h2>
        {
          !isValid && validate
            ? <span className={b('error-message')}>{message}</span>
            : null
        }
        <input
          className={b('input', inputMode)}
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
    const { onChange, setValidity, validate } = this.props;
    const { value } = event.target;
    onChange(value);
    this.setState(isEmailValid(value));
    if (setValidity) {
      setValidity(
        (validate) ? isEmailValid(value).isValid : true,
      );
    }
  };

  handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setState(isEmailValid(value));
  };
}

export { EmailField };
