import React from 'react';
import block from 'bem-cn';
import './RestorePasswordCard.scss';
import { NavLink } from 'react-router-dom';

import { Button, EmailField } from 'shared/view/elements';

const b = block('restore-password-card');

interface IState {
  email: string;
}

class RestorePasswordCard extends React.Component<{}, IState> {
  state: IState = {
    email: '',
  };

  render() {
    const { email } = this.state;
    return (
      <form className={b()}>
        <NavLink className={b('sign-in-link')} to="/authorization/signIn">Войти ➞</NavLink>
        <div className={b('content')}>

          <h1 className={b('title')}>Восстановить пароль</h1>

          <p className={b('description')}>Напомните нам вашу почту и мы пришлем новый пароль</p>

          <div className={b('input')}>
            <EmailField value={email} onChange={this.onChangeEmail} />
          </div>

          <div className={b('submit-button')}>
            <Button value="Отправить новый пароль" />
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
}

export { RestorePasswordCard };
