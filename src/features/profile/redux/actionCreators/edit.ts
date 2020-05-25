import * as NS from '../../namespace';

export function setUser(user: string): NS.ISetUser {
  return { type: 'PROFILE:SET_USER', payload: user };
}
