/* eslint-disable class-methods-use-this */
import * as firebase from 'firebase';

import 'firebase/auth';

import { firebaseConfig } from './firebaseConfig';

class Api {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth();
  }

  public async signIn(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  public async signOut() {
    return firebase.auth().signOut();
  }

  public async signUp(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  public async stateChanged(setUser: (user: string) => void) {
    firebase.auth().onAuthStateChanged(user => {
      if (user && user.email) {
        setUser(user.email);
      } else {
        setUser('');
      }
    });
  }
}

export { Api };
