import React from 'react';
import block from 'bem-cn';
import './SignUpCard.scss';
import { NavLink } from 'react-router-dom';

import { EmailField, PasswordField, Button, Checkbox } from 'shared/view/elements';

const b = block('sign-up-card');

interface IProps {
  onSubmit: (email: string, password: string) => void;
  // errorMessage: string;
}

interface IState {
  email: string;
  password: string;
  isEmailValid: boolean | null;
  isPasswordValid: boolean | null;
}

class SignUpCard extends React.Component<IProps> {
  state: IState = {
    email: '',
    password: '',
    isEmailValid: null,
    isPasswordValid: null,
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className={b()} onSubmit={this.handleSubmit}>
        <NavLink
          className={b('sign-in-link')}
          to="/authorization/signIn"
        >
          Войти ➞
        </NavLink>
        <div className={b('content')}>

          <h1 className={b('title')}>Регистрация</h1>

          <div className={b('input')}>
            <EmailField
              value={email}
              onChange={this.handleEmailChange}
              setValidity={this.setEmailValidity}
            />
          </div>

          <div className={b('input')}>
            <PasswordField
              value={password}
              onChange={this.handlePasswordChange}
              setValidity={this.setPasswordValidity}
              validate
            />
          </div>

          <div className={b('submit-button')}>
            <Button value="Зарегистрироваться" />
          </div>

          <div className={b('terms-of-use')}>
            <p className={b('terms-of-use-content')}>
              Нажимая кнопку &quot;Зарегистрироваться&quot;,
              вы подтверждаете свое согласие с условиями предоставления услуг
            </p>
            <NavLink
              className={b('terms-of-use-link')}
              to="/terms-of-use"
            >
              (Пользовальское соглашение)
            </NavLink>
          </div>

          <div className={b('subscribe-to-newsletter')}>
            <Checkbox
              text="Я не хочу получать еженедельную рассылку с советами
               по поиску работы и новостях о самых востребованных профессиях"
            />
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

export { SignUpCard };
