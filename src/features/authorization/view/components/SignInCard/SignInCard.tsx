import React from 'react';
import block from 'bem-cn';
import './SignInCard.scss';
import { NavLink } from 'react-router-dom';

import { EmailField, PasswordField, Button } from 'shared/view/elements';

const b = block('sign-in-card');

interface IProps {
  onSubmit: (email: string, password: string) => void;
  errorMessage: string;
}

interface IState {
  email: string;
  password: string;
  isEmailValid: boolean | null;
  isPasswordValid: boolean | null;
}

class SignInCard extends React.Component<IProps> {
  state: IState = {
    email: '',
    password: '',
    isEmailValid: null,
    isPasswordValid: null,
  };

  render() {
    const { errorMessage } = this.props;
    const { email, password } = this.state;
    return (
      <form className={b()} onSubmit={this.handleSubmit}>
        <NavLink className={b('sign-up-link')} to="/authorization/signUp">Зарегистрироваться ➞</NavLink>
        <div className={b('content')}>

          <h1 className={b('title')}>Войти</h1>

          <p className={b('error-message')}>{errorMessage}</p>

          <div className={b('input')}>
            <EmailField
              value={email}
              onChange={this.handleEmailChange}
              setValidity={this.setEmailValidity}
              validate
            />
          </div>

          <div className={b('input')}>
            <PasswordField
              value={password}
              onChange={this.handlePasswordChange}
              setValidity={this.setPasswordValidity}
            />
          </div>

          <NavLink className={b('reset-link')} to="/authorization/resetPassword">Восстановить пароль ➞</NavLink>

          <div className={b('submit-button')}>
            <Button value="Войти" />
          </div>

        </div>
      </form>
    );
  }

  private handleEmailChange = (value: string): void => {
    this.setState({
      email: value,
    });
  };

  private handlePasswordChange = (value: string): void => {
    this.setState({
      password: value,
    });
  };

  private handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { email, password, isEmailValid, isPasswordValid } = this.state;
    if (isEmailValid && isPasswordValid) {
      onSubmit(email, password);
    }
  };

  private setEmailValidity = (value: boolean) => {
    this.setState({
      isEmailValid: value,
    });
  };

  private setPasswordValidity = (value: boolean) => {
    this.setState({
      isPasswordValid: value,
    });
  };
}

export { SignInCard };
