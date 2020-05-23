import React from 'react';
import block from 'bem-cn';

import './PasswordField.scss';
import { isPasswordValid } from '../../../validators';

const b = block('password-field');

interface IProps {
  value: string;
  onChange: (value: string) => void;
  setValidity?: (value: boolean | null) => void;
  validate?: boolean;
}

interface IState {
  isPasswordHidden: boolean;
  isValid: boolean | null;
  message: string;
}

class PasswordField extends React.Component<IProps> {
  state: IState = {
    isPasswordHidden: true,
    isValid: null,
    message: '',
  };

  render() {
    const { value, validate } = this.props;
    const { isPasswordHidden, isValid, message } = this.state;
    const requirements = [
      'Одна строчная буква ',
      'Одна заглавная буква',
      'Одна цифра',
      'Минимум 8 знаков',
    ];
    // eslint-disable-next-line no-nested-ternary
    const inputMode = (isValid === true && validate)
      ? { valid: true }
      : (isValid === false && validate)
        ? { invalid: true }
        : { invalid: false };

    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label className={b()}>
        <h2 className={b('title')}>Password</h2>
        {
          !isValid && validate
            ? <span className={b('error-message')}>{message}</span>
            : null
        }
        <div className={b('content')}>
          <input
            className={b('input', inputMode)}
            type={isPasswordHidden ? 'password' : 'text'}
            placeholder="******"
            value={value}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />

          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className={b('toggle')}>
            <input
              className={b('check')}
              type="checkbox"
              onChange={this.handlePasswordEyeToggle}
            />
            <div className={b('check-view')} />
            <span className={b('toggle-hint')} />
          </label>
        </div>

        {
          validate && (
            <ul className={b('requirements')}>
              {requirements.map(requirement => (
                <li className={b('requirement')}>{requirement}</li>
              ))}
            </ul>
          )
        }
      </label>
    );
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange, setValidity } = this.props;
    const { value } = event.target;
    onChange(value);
    this.setState(isPasswordValid(value));
    if (setValidity) setValidity(isPasswordValid(value).isValid);
  };

  handlePasswordEyeToggle = () => {
    this.setState((prevState: IState) => (
      { isPasswordHidden: !prevState.isPasswordHidden }
    ));
  };

  handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setState(isPasswordValid(value));
  };
}

export { PasswordField };
