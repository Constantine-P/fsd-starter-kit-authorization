import React from 'react';
import block from 'bem-cn';

import './PasswordField.scss';
import { isPasswordValid } from '../../../validators';

const b = block('password-field');

interface IProps {
  value: string;
  onChange: (value: string) => void;
  showRequirements?: boolean;
}

interface IState {
  isPasswordHidden: boolean;
  isValid: boolean;
  message: string;
}

class PasswordField extends React.Component<IProps> {
  state: IState = {
    isPasswordHidden: true,
    isValid: true,
    message: '',
  };

  render() {
    const { value, showRequirements } = this.props;
    const { isPasswordHidden, isValid, message } = this.state;
    const requirements = [
      'Одна строчная буква ',
      'Одна заглавная буква',
      'Одна цифра',
      'Минимум 8 знаков',
    ];
    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label className={b()}>
        <h2 className={b('title')}>Password</h2>
        {
          !isValid && showRequirements
            ? (
              <span className={b('error-message')}>
                {message}
              </span>
            )
            : null
        }
        <div className={b('content')}>
          <input
            className={b('input')}
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
              onChange={this.onTogglePassword}
            />
            <div className={b('check-view')} />
            <span className={b('toggle-hint')} />
          </label>
        </div>

        {showRequirements
        && (
          <ul className={b('requirements')}>
            {requirements.map(requirement => (
              <li className={b('requirement')}>{requirement}</li>
            ))}
          </ul>
        )}
      </label>
    );
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const { value } = event.target;
    onChange(value);
    this.setState(isPasswordValid(value));
  };

  onTogglePassword = () => {
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
