import React from 'react';
import block from 'bem-cn';
import './SignInCard.scss';
import { NavLink } from 'react-router-dom';

import { EmailField, PasswordField, Button } from 'shared/view/elements';

const b = block('sign-up-card');

interface IProps {
  onClick: (email: string, password: string) => void;
  // errorMessage: string;
}

interface IState {
  email: string;
  password: string;
}

class SignInCard extends React.Component<IProps> {
  state: IState = {
    email: '',
    password: '',
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className={b()} onSubmit={this.onSubmit}>
        <NavLink className={b('sign-in-link')} to="/authorization/signUp">Зарегистрироваться ➞</NavLink>
        <div className={b('content')}>

          <h1 className={b('title')}>Войти</h1>

          <div className={b('input')}>
            <EmailField value={email} onChange={this.onChangeEmail} />
          </div>

          <div className={b('input')}>
            <PasswordField value={password} onChange={this.onChangePassword} />
          </div>

          <div className={b('subscribe-to-newsletter')}>
            <NavLink className={b('sign-in-link')} to="/authorization/restore">Восстановить пароль ➞</NavLink>
          </div>

          <div className={b('submit-button')}>
            <Button value="Войти" />
          </div>

        </div>
      </form>
    );
  }

  onChangeEmail = (value: string): void => {
    this.setState({
      email: value,
    });
  };

  onChangePassword = (value: string): void => {
    this.setState({
      password: value,
    });
  };

  onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { onClick } = this.props;
    const { email, password } = this.state;
    // console.log('onSubmit');
    onClick(email, password);
  };
}

export { SignInCard };
