import React from 'react';
import block from 'bem-cn';

import './PasswordField.scss';

const b = block('password-field');

interface IProps {
  value: string;
  onChange: (value: string) => void;
}

interface IState {
  isPasswordHidden: boolean;
}

class PasswordField extends React.Component<IProps> {
  state: IState = {
    isPasswordHidden: true,
  };

  render() {
    const { value } = this.props;
    const { isPasswordHidden } = this.state;
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

        <div className={b('content')}>
          <input
            className={b('input')}
            type={isPasswordHidden ? 'password' : 'text'}
            placeholder="******"
            value={value}
            onChange={this.handleChange}
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

        <ul className={b('requirements')}>
          {requirements.map(requirement => (
            <li className={b('requirement')}>{requirement}</li>
          ))}
        </ul>
      </label>
    );
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const target = event.target.value;
    onChange(target);
  };

  onTogglePassword = () => {
    this.setState((prevState: IState) => (
      { isPasswordHidden: !prevState.isPasswordHidden }
    ));
  };
}

export { PasswordField };
