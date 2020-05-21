/* eslint-disable no-console */
import React from 'react';
import block from 'bem-cn';
import { connect } from 'react-redux';

import { IAppReduxState } from 'shared/types/app';
import { IProfile } from 'shared/types/models';

import { selectors, actionCreators } from '../../../redux';
import { Button } from '../../../../../shared/view/elements';

import './Profile.scss';

const b = block('profile');

interface IOwnProps {
  setUser: (user: string) => void;
  stateChanged: (object: {setUser: (user: string) => void}) => void;
  signOut: () => void;
  redirectToRoot: () => void;
}

interface IStateProps {
  profile: IProfile;
}

function mapState(state: IAppReduxState): IStateProps {
  return {
    profile: selectors.selectProfile(state),
  };
}

const mapDispatch = {
  setUser: actionCreators.setUser,
  stateChanged: actionCreators.stateChanged,
  signOut: actionCreators.signOut,
};

type IProps = IOwnProps & IStateProps;

class ProfileComponent extends React.Component<IProps> {
  componentDidMount() {
    const {
      stateChanged, setUser,
    } = this.props;

    stateChanged({ setUser });
  }

  componentDidUpdate() {
    const { profile: { name }, redirectToRoot } = this.props;
    if (!name) redirectToRoot();
  }

  render() {
    const { profile: { name, nickname, age, bio }, signOut } = this.props;

    return (
      <article className={b()}>
        <h1 className={b('title')}>Профиль</h1>
        <table className={b('content')}>
          <tr className={b('name')}>
            <td className={b('content-cell')}>e-mail</td>
            <td className={b('content-cell')}>{name}</td>
          </tr>
          <tr className={b('name')}>
            <td className={b('content-cell')}>nickname</td>
            <td className={b('content-cell')}>{nickname}</td>
          </tr>
          <tr className={b('name')}>
            <td className={b('content-cell')}>age</td>
            <td className={b('content-cell')}>{age}</td>
          </tr>
          <tr className={b('name')}>
            <td className={b('content-cell')}>bio</td>
            <td className={b('content-cell')}>{bio}</td>
          </tr>
        </table>

        <div className={b('sign-out-button')}>
          <Button
            value="Выйти"
            onClick={signOut}
          />
        </div>
      </article>
    );
  }
}

const Profile = connect(mapState, mapDispatch)(ProfileComponent);

export { Profile, ProfileComponent, IProps as IProfileProps };
