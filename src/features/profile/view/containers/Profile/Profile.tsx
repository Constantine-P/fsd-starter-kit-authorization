import React from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import block from 'bem-cn';

import { IAppReduxState } from 'shared/types/app';
import { IProfile } from 'shared/types/models';

import { selectors } from '../../../redux';

const b = block('profile');

interface IStateProps {
  profile: IProfile;
}

function mapState(state: IAppReduxState): IStateProps {
  return {
    profile: selectors.selectProfile(state),
  };
}

type IProps = IStateProps;

@autobind
class ProfileComponent extends React.Component<IProps> {
  render() {
    const { profile: { name, nickname, age, bio } } = this.props;
    return (
      <article className={b()}>
        <h1 className={b('title')}>Профиль</h1>
        <div className={b('name')}>{`Имя:${name}`}</div>
        <div className={b('nickname')}>{`Погоняло:${nickname}`}</div>
        <div className={b('age')}>{`Возраст:${age}`}</div>
        <div className={b('bio')}>{`Житие:${bio}`}</div>
      </article>
    );
  }
}

const Profile = connect(mapState)(ProfileComponent);

export { Profile, ProfileComponent, IProps as IProfileProps };
