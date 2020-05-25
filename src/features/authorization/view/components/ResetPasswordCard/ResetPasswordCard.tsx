import React from 'react';
import block from 'bem-cn';
import './ResetPasswordCard.scss';
import { NavLink } from 'react-router-dom';

import { Button, EmailField } from 'shared/view/elements';

const b = block('reset-password-card');

interface IProps {
  onSubmit: (email: string) => void;
  errorMessage: string;
}

interface IState {
  email: string;
}

class ResetPasswordCard extends React.Component<IProps, IState> {
  state: IState = {
    email: '',
  };

  render() {
    const { errorMessage } = this.props;
    const { email } = this.state;
    return (
      <form className={b()} onSubmit={this.handleSubmit}>

        <NavLink className={b('sign-in-link')} to="/authorization/signIn">Войти ➞</NavLink>

        <div className={b('content')}>

          <h1 className={b('title')}>Восстановить пароль</h1>

          <p className={b('description')}>Напомните нам вашу почту и мы пришлем новый пароль</p>

          <p className={b('error-message')}>{errorMessage}</p>

          <div className={b('input')}>
            <EmailField
              value={email}
              onChange={this.handleEmailChange}
            />
          </div>

          <div className={b('submit-button')}>
            <Button value="Отправить новый пароль" />
          </div>

        </div>
      </form>
    );
  }

  handleEmailChange = (value: string): void => {
    this.setState({
      email: value,
    });
  };

  private handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { email } = this.state;
    onSubmit(email);
  };
}

export { ResetPasswordCard };
