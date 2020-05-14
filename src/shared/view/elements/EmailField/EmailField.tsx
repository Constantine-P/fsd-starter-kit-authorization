import React from 'react';
import block from 'bem-cn';

import './EmailField.scss';

const b = block('email-field');

interface IProps {
  value: string;
  onChange: (value: string) => void
}

interface IState {
  isValid: boolean;
}

class EmailField extends React.Component<IProps, IState> {
  state: IState = {
    isValid: true,
  };

  render() {
    const { value } = this.props;
    const { isValid } = this.state;
    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label className={b()}>
        <h2 className={b('title')}>Email</h2>
        {
          isValid
            ? null
            : (
              <span className={b('error-message')}>
                Email должен содержать «@»
              </span>
            )
        }
        <input
          className={b('input')}
          type="email"
          placeholder="ivanova@mail.com"
          value={value}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
      </label>
    );
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const target = event.target.value;
    onChange(target);
  };

  handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = !(event.target.value.indexOf('@') === -1);
    this.setState({ isValid });
  };
}

export { EmailField };
