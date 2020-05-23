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
    const { profile, signOut } = this.props;

    return (
      <article className={b()}>
        <h1 className={b('title')}>Профиль</h1>
        <table className={b('content')}>
          {
            Object.keys(profile).map((item: keyof IProfile) => (
              <tr>
                <td className={b('content-cell')}>{item}</td>
                <td className={b('content-cell')}>{profile[item]}</td>
              </tr>
            ))
          }
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
