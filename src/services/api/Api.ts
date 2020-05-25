/* eslint-disable class-methods-use-this */
import * as firebase from 'firebase';

import 'firebase/auth';

import { firebaseConfig } from './firebaseConfig';

import UserCredential = firebase.auth.UserCredential;

class Api {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth();
  }

  public signIn = async (email: string, password: string): Promise<UserCredential> =>
    firebase.auth().signInWithEmailAndPassword(email, password);

  public signOut = async (): Promise<void> => {
    firebase.auth().signOut();
  };

  public signUp = async (email: string, password: string): Promise<UserCredential> =>
    firebase.auth().createUserWithEmailAndPassword(email, password);

  public resetPassword = async (email: string): Promise<void> => {
    await firebase.auth().sendPasswordResetEmail(email);
  };

  public async stateChanged(setUser: (user: string) => void): Promise<void> {
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
