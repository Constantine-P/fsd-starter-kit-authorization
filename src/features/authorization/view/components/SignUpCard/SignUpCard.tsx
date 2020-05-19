import React from 'react';
import block from 'bem-cn';
import './SignUpCard.scss';
import { NavLink } from 'react-router-dom';

import { EmailField, PasswordField, Button, Checkbox } from 'shared/view/elements';

const b = block('sign-up-card');

interface IProps {
  onClick: (email: string, password: string) => void;
  // errorMessage: string;
}

interface IState {
  email: string;
  password: string;
}

class SignUpCard extends React.Component<IProps> {
  state: IState = {
    email: '',
    password: '',
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className={b()} onSubmit={this.onSubmit}>
        <NavLink className={b('sign-in-link')} to="/authorization/signIn">Войти ➞</NavLink>
        <div className={b('content')}>

          <h1 className={b('title')}>Регистрация</h1>

          <div className={b('input')}>
            <EmailField value={email} onChange={this.onChangeEmail} />
          </div>

          <div className={b('input')}>
            <PasswordField value={password} onChange={this.onChangePassword} showRequirements />
          </div>

          <div className={b('submit-button')}>
            <Button value="Зарегистрироваться" />
          </div>

          <div className={b('terms-of-use')}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Нажимая кнопку "Зарегистрироваться",
            вы подтверждаете свое согласие с условиями предоставления услуг
            <NavLink className={b('terms-of-use-link')} to="/terms-of-use">(Пользовальское соглашение)</NavLink>
          </div>

          <div className={b('subscribe-to-newsletter')}>
            <Checkbox text="Я не хочу получать еженедельную рассылку с советами по поиску работы и новостях о самых востребованных профессиях" />
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

export { SignUpCard };
